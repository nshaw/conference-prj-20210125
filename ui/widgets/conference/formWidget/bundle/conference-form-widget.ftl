<#assign wp=JspTaglibs["/aps-core"]>
<#-- entando_resource_injection_point -->
<#-- Don't add anything above this line. The build scripts will automatically link the compiled JS and CSS for you and add them above this line so that the widget can be loaded-->

<#-- This is the custom element -->
<@wp.info key="currentLang" var="currentLangVar" />
<conference-form locale="${currentLangVar}" service-url="/conference" />
