module.exports = [
    [
        ["S", ["EXP"]], "<%= $1%>"
    ],
    [
        ["EXP", ["variable"]], "sys_variable(\"<%= $1%>\")"
    ],
    [
        ["EXP", ["JSON"]], "<%= $1%>"
    ],
    [
        ["JSON", ["string"]], "sys_string(<%= $1%>)"
    ],
    [
        ["JSON", ["number"]], "sys_number(\"<%= $1%>\")"
    ],
    [
        ["JSON", ["true"]], "sys_true(\"<%= $1%>\")"
    ],
    [
        ["JSON", ["false"]], "sys_false(\"<%= $1%>\")"
    ],
    [
        ["JSON", ["null"]], "sys_null(\"<%= $1%>\")"
    ],

    [
        ["JSON", ["OBJECT"]], "<%= $1%>"
    ],
    [
        ["JSON", ["ARRAY"]], "<%= $1%>"
    ],

    [
        ["OBJECT", ["leftBrace", "KEY_VALUES", "rightBrace"]], "sys_object(<%= $2%>)"
    ],
    [
        ["OBJECT", ["leftBrace", "rightBrace"]], "sys_object()"
    ],
    [
        ["KEY_VALUES", ["string", "colon", "JSON"]], "sys_string(<%= $1%>), <%= $3%>"
    ],
    [
        ["KEY_VALUES", ["string", "colon", "JSON", "comma", "KEY_VALUES"]], "sys_string(<%= $1%>), <%= $3%>, <%=$5%>"
    ],

    [
        ["ARRAY", ["leftBracket", "rightBracket"]], "sys_array()"
    ],
    [
        ["ARRAY", ["leftBracket", "LIST_VALUES", "rightBracket"]], "sys_array(<%= $2%>)"
    ],
    [
        ["LIST_VALUES", ["JSON"]], "<%= $1%>"
    ],
    [
        ["LIST_VALUES", ["JSON", "comma", "LIST_VALUES"]], "<%= $1%>, <%= $3%>"
    ]
]