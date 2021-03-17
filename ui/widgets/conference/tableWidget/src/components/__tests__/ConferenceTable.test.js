import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'components/__mocks__/i18n';
import conferenceMocks from 'components/__mocks__/conferenceMocks';
import ConferenceTable from 'components/ConferenceTable';

describe('ConferenceTable', () => {
  it('shows conferences', () => {
    const { getByText } = render(<ConferenceTable items={conferenceMocks} />);
    expect(
      getByText(
        'Ratione sapiente ut omnis deleniti veritatis aut occaecati et nihil. Delectus non aut rerum voluptas eligendi sint distinctio. Et sed fuga nesciunt nobis non et enim quas provident. Quia voluptatum est ad recusandae. Quis est excepturi quam consequatur fugit rerum accusamus.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Ut quae et voluptatem. Quaerat quo dolor et sit ipsa. Id cumque placeat. Accusamus eos expedita nihil tenetur doloribus velit. Quia debitis nulla magni harum et.'
      )
    ).toBeInTheDocument();
  });

  it('shows no conferences message', () => {
    const { queryByText } = render(<ConferenceTable items={[]} />);
    expect(
      queryByText(
        'Ratione sapiente ut omnis deleniti veritatis aut occaecati et nihil. Delectus non aut rerum voluptas eligendi sint distinctio. Et sed fuga nesciunt nobis non et enim quas provident. Quia voluptatum est ad recusandae. Quis est excepturi quam consequatur fugit rerum accusamus.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Ut quae et voluptatem. Quaerat quo dolor et sit ipsa. Id cumque placeat. Accusamus eos expedita nihil tenetur doloribus velit. Quia debitis nulla magni harum et.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.conference.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(
      <ConferenceTable items={conferenceMocks} onSelect={onSelectMock} />
    );
    fireEvent.click(
      getByText(
        'Ratione sapiente ut omnis deleniti veritatis aut occaecati et nihil. Delectus non aut rerum voluptas eligendi sint distinctio. Et sed fuga nesciunt nobis non et enim quas provident. Quia voluptatum est ad recusandae. Quis est excepturi quam consequatur fugit rerum accusamus.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
