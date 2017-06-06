module.exports = {
    "S := EXP": "<%= $1%>",
    "EXP := variable": "sys_variable(\"<%= $1%>\")",
    "EXP := ABSTRACTION": "<%= $1%>",
    "EXP := APPLICATION": "<%= $1%>",

    "APPLICATION := CALLER ( )": "sys_application(<%= $1%>, sys_void())",
    "APPLICATION := CALLER PARAMS": "sys_application(<%= $1%>, <%= $2%>)",
    "APPLICATION := CALLER ( EXP_LIST )": "sys_application(<%= $1%>, <%= $3%>)",

    "CALLER := variable": "sys_variable(\"<%= $1%>\")",

    "CALLER := APPLICATION": "<%= $1%>",
    "CALLER := ( ABSTRACTION )": "<%= $2%>",

    "EXP_LIST := EXP": "<%= $1%>",
    "EXP_LIST := EXP , EXP_LIST": "sys_pair(<%= $1%>, <%= $3%>)",

    "ABSTRACTION := ( ) -> EXP": "sys_abstraction(sys_void(), <%= $4%>)",
    "ABSTRACTION := ( LIST_VARIABLES ) -> EXP": "sys_abstraction(<%= $2%>, <%= $5%>)",

    "LIST_VARIABLES := variable": "sys_variable(\"<%= $1%>\")",
    "LIST_VARIABLES := variable , LIST_VARIABLES": "sys_pair(sys_variable(\"<%= $1%>\"), <%= $3%>)",

    "EXP := JSON": "sys_data(<%= $1%>)",
    "JSON := string": "sys_string(<%= $1%>)",
    "JSON := number": "sys_number(\"<%= $1%>\")",
    "JSON := true": "sys_true()",
    "JSON := false": "sys_false()",
    "JSON := null": "sys_null()",
    "JSON := OBJECT": "<%= $1%>",
    "JSON := ARRAY": "<%= $1%>",
    "OBJECT := { KEY_VALUES }": "sys_object(<%= $2%>)",
    "OBJECT := { }": "sys_object(sys_void())",
    "KEY_VALUES := string colon JSON": "sys_pair(sys_string(<%= $1%>), <%= $3%>)",
    "KEY_VALUES := string colon JSON , KEY_VALUES": "sys_pair(sys_pair(sys_string(<%= $1%>), <%= $3%>), <%=$5%>)",
    "ARRAY := [ ]": "sys_array(sys_void())",
    "ARRAY := [ LIST_VALUES ]": "sys_array(<%= $2%>)",
    "LIST_VALUES := JSON": "<%= $1%>",
    "LIST_VALUES := JSON , LIST_VALUES": "sys_pair(<%= $1%>, <%= $3%>)"
}