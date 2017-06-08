module.exports = {
    "GOTO": [
        {
            "S": 10,
            "STATEMENTS": 11,
            "STATEMENT": 12,
            "EXP": 13,
            "APPLICATION": 14,
            "CALLER": 15,
            "ABSTRACTION": 16,
            "JSON": 17,
            "OBJECT": 18,
            "ARRAY": 19
        },
        {},
        {
            "ABSTRACTION": 23,
            "LIST_VARIABLES": 24
        },
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 27
        },
        {
            "JSON": 36,
            "OBJECT": 37,
            "ARRAY": 38,
            "LIST_VALUES": 39
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "LIST_VARIABLES": 44
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 51
        },
        {
            "JSON": 36,
            "OBJECT": 37,
            "ARRAY": 38,
            "LIST_VALUES": 53
        },
        {},
        {},
        {},
        {},
        {},
        {
            "STATEMENTS": 56,
            "STATEMENT": 12,
            "EXP": 13,
            "APPLICATION": 14,
            "CALLER": 15,
            "ABSTRACTION": 16,
            "JSON": 17,
            "OBJECT": 18,
            "ARRAY": 19
        },
        {
            "EXP": 67,
            "APPLICATION": 68,
            "CALLER": 69,
            "EXP_LIST": 70,
            "ABSTRACTION": 71,
            "JSON": 72,
            "OBJECT": 73,
            "ARRAY": 74
        },
        {
            "LIST_VARIABLES": 75
        },
        {},
        {},
        {
            "EXP": 78,
            "APPLICATION": 14,
            "CALLER": 15,
            "ABSTRACTION": 16,
            "JSON": 17,
            "OBJECT": 18,
            "ARRAY": 19
        },
        {},
        {},
        {
            "JSON": 87,
            "OBJECT": 88,
            "ARRAY": 89
        },
        {},
        {},
        {},
        {},
        {},
        {
            "JSON": 36,
            "OBJECT": 37,
            "ARRAY": 38,
            "LIST_VALUES": 92
        },
        {},
        {},
        {},
        {
            "ABSTRACTION": 23,
            "LIST_VARIABLES": 94
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 96
        },
        {
            "JSON": 36,
            "OBJECT": 37,
            "ARRAY": 38,
            "LIST_VALUES": 98
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 111,
            "APPLICATION": 112,
            "CALLER": 113,
            "ABSTRACTION": 114,
            "JSON": 115,
            "OBJECT": 116,
            "ARRAY": 117
        },
        {},
        {},
        {
            "EXP": 119,
            "APPLICATION": 14,
            "CALLER": 15,
            "ABSTRACTION": 16,
            "JSON": 17,
            "OBJECT": 18,
            "ARRAY": 19
        },
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 121
        },
        {
            "JSON": 36,
            "OBJECT": 37,
            "ARRAY": 38,
            "LIST_VALUES": 123
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 67,
            "APPLICATION": 68,
            "CALLER": 69,
            "EXP_LIST": 129,
            "ABSTRACTION": 71,
            "JSON": 72,
            "OBJECT": 73,
            "ARRAY": 74
        },
        {
            "EXP": 67,
            "APPLICATION": 68,
            "CALLER": 69,
            "EXP_LIST": 131,
            "ABSTRACTION": 71,
            "JSON": 72,
            "OBJECT": 73,
            "ARRAY": 74
        },
        {},
        {},
        {
            "ABSTRACTION": 23,
            "LIST_VARIABLES": 44
        },
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 133
        },
        {
            "JSON": 36,
            "OBJECT": 37,
            "ARRAY": 38,
            "LIST_VALUES": 135
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 137,
            "APPLICATION": 112,
            "CALLER": 113,
            "ABSTRACTION": 114,
            "JSON": 115,
            "OBJECT": 116,
            "ARRAY": 117
        },
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 140
        },
        {
            "EXP": 141,
            "APPLICATION": 68,
            "CALLER": 69,
            "ABSTRACTION": 71,
            "JSON": 72,
            "OBJECT": 73,
            "ARRAY": 74
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 67,
            "APPLICATION": 68,
            "CALLER": 69,
            "EXP_LIST": 147,
            "ABSTRACTION": 71,
            "JSON": 72,
            "OBJECT": 73,
            "ARRAY": 74
        },
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 148,
            "APPLICATION": 68,
            "CALLER": 69,
            "ABSTRACTION": 71,
            "JSON": 72,
            "OBJECT": 73,
            "ARRAY": 74
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ],
    "ACTION": [
        {
            "$": {
                "type": "reduce",
                "production": [
                    "STATEMENT",
                    []
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "STATEMENT",
                    []
                ]
            },
            "variable": {
                "type": "shift",
                "state": 1
            },
            "string": {
                "type": "shift",
                "state": 3
            },
            "number": {
                "type": "shift",
                "state": 4
            },
            "true": {
                "type": "shift",
                "state": 5
            },
            "false": {
                "type": "shift",
                "state": 6
            },
            "null": {
                "type": "shift",
                "state": 7
            },
            "(": {
                "type": "shift",
                "state": 2
            },
            "{": {
                "type": "shift",
                "state": 8
            },
            "[": {
                "type": "shift",
                "state": 9
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "variable"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 22
            },
            "variable": {
                "type": "shift",
                "state": 20
            },
            "(": {
                "type": "shift",
                "state": 21
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 26
            },
            "string": {
                "type": "shift",
                "state": 25
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 35
            },
            "string": {
                "type": "shift",
                "state": 28
            },
            "number": {
                "type": "shift",
                "state": 29
            },
            "true": {
                "type": "shift",
                "state": 30
            },
            "false": {
                "type": "shift",
                "state": 31
            },
            "null": {
                "type": "shift",
                "state": 32
            },
            "{": {
                "type": "shift",
                "state": 33
            },
            "[": {
                "type": "shift",
                "state": 34
            }
        },
        {
            "$": {
                "type": "accept"
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "S",
                    [
                        "STATEMENTS"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "STATEMENTS",
                    [
                        "STATEMENT"
                    ]
                ]
            },
            ";": {
                "type": "shift",
                "state": 40
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "STATEMENT",
                    [
                        "EXP"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "STATEMENT",
                    [
                        "EXP"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "APPLICATION"
                    ]
                ]
            }
        },
        {
            "(": {
                "type": "shift",
                "state": 41
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "ABSTRACTION"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "ABSTRACTION"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "JSON"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "JSON"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "LIST_VARIABLES",
                    [
                        "variable"
                    ]
                ]
            },
            ",": {
                "type": "shift",
                "state": 42
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 43
            },
            "variable": {
                "type": "shift",
                "state": 20
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 45
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 46
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 47
            }
        },
        {
            "colon": {
                "type": "shift",
                "state": 48
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 49
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 50
            },
            "string": {
                "type": "shift",
                "state": 25
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 52
            },
            "string": {
                "type": "shift",
                "state": 28
            },
            "number": {
                "type": "shift",
                "state": 29
            },
            "true": {
                "type": "shift",
                "state": 30
            },
            "false": {
                "type": "shift",
                "state": 31
            },
            "null": {
                "type": "shift",
                "state": 32
            },
            "{": {
                "type": "shift",
                "state": 33
            },
            "[": {
                "type": "shift",
                "state": 34
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "LIST_VALUES",
                    [
                        "JSON"
                    ]
                ]
            },
            ",": {
                "type": "shift",
                "state": 54
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 55
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "STATEMENT",
                    []
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "STATEMENT",
                    []
                ]
            },
            "variable": {
                "type": "shift",
                "state": 1
            },
            "string": {
                "type": "shift",
                "state": 3
            },
            "number": {
                "type": "shift",
                "state": 4
            },
            "true": {
                "type": "shift",
                "state": 5
            },
            "false": {
                "type": "shift",
                "state": 6
            },
            "null": {
                "type": "shift",
                "state": 7
            },
            "(": {
                "type": "shift",
                "state": 2
            },
            "{": {
                "type": "shift",
                "state": 8
            },
            "[": {
                "type": "shift",
                "state": 9
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 59
            },
            "variable": {
                "type": "shift",
                "state": 57
            },
            "string": {
                "type": "shift",
                "state": 60
            },
            "number": {
                "type": "shift",
                "state": 61
            },
            "true": {
                "type": "shift",
                "state": 62
            },
            "false": {
                "type": "shift",
                "state": 63
            },
            "null": {
                "type": "shift",
                "state": 64
            },
            "(": {
                "type": "shift",
                "state": 58
            },
            "{": {
                "type": "shift",
                "state": 65
            },
            "[": {
                "type": "shift",
                "state": 66
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 20
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 76
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 77
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 1
            },
            "string": {
                "type": "shift",
                "state": 3
            },
            "number": {
                "type": "shift",
                "state": 4
            },
            "true": {
                "type": "shift",
                "state": 5
            },
            "false": {
                "type": "shift",
                "state": 6
            },
            "null": {
                "type": "shift",
                "state": 7
            },
            "(": {
                "type": "shift",
                "state": 2
            },
            "{": {
                "type": "shift",
                "state": 8
            },
            "[": {
                "type": "shift",
                "state": 9
            }
        },
        {
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "(",
                        "ABSTRACTION",
                        ")"
                    ]
                ]
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 79
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 80
            },
            "number": {
                "type": "shift",
                "state": 81
            },
            "true": {
                "type": "shift",
                "state": 82
            },
            "false": {
                "type": "shift",
                "state": 83
            },
            "null": {
                "type": "shift",
                "state": 84
            },
            "{": {
                "type": "shift",
                "state": 85
            },
            "[": {
                "type": "shift",
                "state": 86
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 90
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 91
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 28
            },
            "number": {
                "type": "shift",
                "state": 29
            },
            "true": {
                "type": "shift",
                "state": 30
            },
            "false": {
                "type": "shift",
                "state": 31
            },
            "null": {
                "type": "shift",
                "state": 32
            },
            "{": {
                "type": "shift",
                "state": 33
            },
            "[": {
                "type": "shift",
                "state": 34
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "STATEMENTS",
                    [
                        "STATEMENT",
                        ";",
                        "STATEMENTS"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "variable"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 93
            },
            "variable": {
                "type": "shift",
                "state": 20
            },
            "(": {
                "type": "shift",
                "state": 21
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 95
            },
            "string": {
                "type": "shift",
                "state": 25
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 97
            },
            "string": {
                "type": "shift",
                "state": 28
            },
            "number": {
                "type": "shift",
                "state": 29
            },
            "true": {
                "type": "shift",
                "state": 30
            },
            "false": {
                "type": "shift",
                "state": 31
            },
            "null": {
                "type": "shift",
                "state": 32
            },
            "{": {
                "type": "shift",
                "state": 33
            },
            "[": {
                "type": "shift",
                "state": 34
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP_LIST",
                    [
                        "EXP"
                    ]
                ]
            },
            ",": {
                "type": "shift",
                "state": 99
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "APPLICATION"
                    ]
                ]
            }
        },
        {
            "(": {
                "type": "shift",
                "state": 100
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 101
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "ABSTRACTION"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "ABSTRACTION"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "JSON"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "JSON"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "LIST_VARIABLES",
                    [
                        "variable",
                        ",",
                        "LIST_VARIABLES"
                    ]
                ]
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 102
            },
            "string": {
                "type": "shift",
                "state": 104
            },
            "number": {
                "type": "shift",
                "state": 105
            },
            "true": {
                "type": "shift",
                "state": 106
            },
            "false": {
                "type": "shift",
                "state": 107
            },
            "null": {
                "type": "shift",
                "state": 108
            },
            "(": {
                "type": "shift",
                "state": 103
            },
            "{": {
                "type": "shift",
                "state": 109
            },
            "[": {
                "type": "shift",
                "state": 110
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 118
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 1
            },
            "string": {
                "type": "shift",
                "state": 3
            },
            "number": {
                "type": "shift",
                "state": 4
            },
            "true": {
                "type": "shift",
                "state": 5
            },
            "false": {
                "type": "shift",
                "state": 6
            },
            "null": {
                "type": "shift",
                "state": 7
            },
            "(": {
                "type": "shift",
                "state": 2
            },
            "{": {
                "type": "shift",
                "state": 8
            },
            "[": {
                "type": "shift",
                "state": 9
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 120
            },
            "string": {
                "type": "shift",
                "state": 25
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 122
            },
            "string": {
                "type": "shift",
                "state": 28
            },
            "number": {
                "type": "shift",
                "state": 29
            },
            "true": {
                "type": "shift",
                "state": 30
            },
            "false": {
                "type": "shift",
                "state": 31
            },
            "null": {
                "type": "shift",
                "state": 32
            },
            "{": {
                "type": "shift",
                "state": 33
            },
            "[": {
                "type": "shift",
                "state": 34
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "KEY_VALUES",
                    [
                        "string",
                        "colon",
                        "JSON"
                    ]
                ]
            },
            ",": {
                "type": "shift",
                "state": 124
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "LIST_VALUES",
                    [
                        "JSON",
                        ",",
                        "LIST_VALUES"
                    ]
                ]
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 125
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 126
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 127
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 128
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 57
            },
            "string": {
                "type": "shift",
                "state": 60
            },
            "number": {
                "type": "shift",
                "state": 61
            },
            "true": {
                "type": "shift",
                "state": 62
            },
            "false": {
                "type": "shift",
                "state": 63
            },
            "null": {
                "type": "shift",
                "state": 64
            },
            "(": {
                "type": "shift",
                "state": 58
            },
            "{": {
                "type": "shift",
                "state": 65
            },
            "[": {
                "type": "shift",
                "state": 66
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 130
            },
            "variable": {
                "type": "shift",
                "state": 57
            },
            "string": {
                "type": "shift",
                "state": 60
            },
            "number": {
                "type": "shift",
                "state": 61
            },
            "true": {
                "type": "shift",
                "state": 62
            },
            "false": {
                "type": "shift",
                "state": 63
            },
            "null": {
                "type": "shift",
                "state": 64
            },
            "(": {
                "type": "shift",
                "state": 58
            },
            "{": {
                "type": "shift",
                "state": 65
            },
            "[": {
                "type": "shift",
                "state": 66
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "variable"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 43
            },
            "variable": {
                "type": "shift",
                "state": 20
            },
            "(": {
                "type": "shift",
                "state": 21
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 132
            },
            "string": {
                "type": "shift",
                "state": 25
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 134
            },
            "string": {
                "type": "shift",
                "state": 28
            },
            "number": {
                "type": "shift",
                "state": 29
            },
            "true": {
                "type": "shift",
                "state": 30
            },
            "false": {
                "type": "shift",
                "state": 31
            },
            "null": {
                "type": "shift",
                "state": 32
            },
            "{": {
                "type": "shift",
                "state": 33
            },
            "[": {
                "type": "shift",
                "state": 34
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "APPLICATION"
                    ]
                ]
            }
        },
        {
            "(": {
                "type": "shift",
                "state": 136
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "ABSTRACTION"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "JSON"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 102
            },
            "string": {
                "type": "shift",
                "state": 104
            },
            "number": {
                "type": "shift",
                "state": 105
            },
            "true": {
                "type": "shift",
                "state": 106
            },
            "false": {
                "type": "shift",
                "state": 107
            },
            "null": {
                "type": "shift",
                "state": 108
            },
            "(": {
                "type": "shift",
                "state": 103
            },
            "{": {
                "type": "shift",
                "state": 109
            },
            "[": {
                "type": "shift",
                "state": 110
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        "LIST_VARIABLES",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            },
            ";": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        "LIST_VARIABLES",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 138
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 139
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 25
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 57
            },
            "string": {
                "type": "shift",
                "state": 60
            },
            "number": {
                "type": "shift",
                "state": 61
            },
            "true": {
                "type": "shift",
                "state": 62
            },
            "false": {
                "type": "shift",
                "state": 63
            },
            "null": {
                "type": "shift",
                "state": 64
            },
            "(": {
                "type": "shift",
                "state": 58
            },
            "{": {
                "type": "shift",
                "state": 65
            },
            "[": {
                "type": "shift",
                "state": 66
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 142
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP_LIST",
                    [
                        "EXP",
                        ",",
                        "EXP_LIST"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 143
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 144
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 145
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 146
            },
            "variable": {
                "type": "shift",
                "state": 57
            },
            "string": {
                "type": "shift",
                "state": 60
            },
            "number": {
                "type": "shift",
                "state": 61
            },
            "true": {
                "type": "shift",
                "state": 62
            },
            "false": {
                "type": "shift",
                "state": 63
            },
            "null": {
                "type": "shift",
                "state": 64
            },
            "(": {
                "type": "shift",
                "state": 58
            },
            "{": {
                "type": "shift",
                "state": 65
            },
            "[": {
                "type": "shift",
                "state": 66
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        "LIST_VARIABLES",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "KEY_VALUES",
                    [
                        "string",
                        "colon",
                        "JSON",
                        ",",
                        "KEY_VALUES"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 57
            },
            "string": {
                "type": "shift",
                "state": 60
            },
            "number": {
                "type": "shift",
                "state": 61
            },
            "true": {
                "type": "shift",
                "state": 62
            },
            "false": {
                "type": "shift",
                "state": 63
            },
            "null": {
                "type": "shift",
                "state": 64
            },
            "(": {
                "type": "shift",
                "state": 58
            },
            "{": {
                "type": "shift",
                "state": 65
            },
            "[": {
                "type": "shift",
                "state": 66
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 149
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        "LIST_VARIABLES",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        "LIST_VARIABLES",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            }
        }
    ]
}