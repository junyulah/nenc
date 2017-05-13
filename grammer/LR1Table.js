module.exports = {
    "GOTO": [
        {
            "S": 9,
            "EXP": 10,
            "JSON": 11,
            "OBJECT": 12,
            "ARRAY": 13
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 16
        },
        {
            "JSON": 25,
            "OBJECT": 26,
            "ARRAY": 27,
            "LIST_VALUES": 28
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
        {},
        {
            "KEY_VALUES": 32
        },
        {
            "JSON": 25,
            "OBJECT": 26,
            "ARRAY": 27,
            "LIST_VALUES": 34
        },
        {},
        {},
        {},
        {},
        {},
        {
            "JSON": 44,
            "OBJECT": 45,
            "ARRAY": 46
        },
        {},
        {},
        {},
        {},
        {},
        {
            "JSON": 25,
            "OBJECT": 26,
            "ARRAY": 27,
            "LIST_VALUES": 49
        },
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
            "JSON": 25,
            "OBJECT": 26,
            "ARRAY": 27,
            "LIST_VALUES": 53
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
            "KEY_VALUES": 57
        },
        {},
        {},
        {}
    ],
    "ACTION": [
        {
            "variable": {
                "type": "shift",
                "state": 1
            },
            "string": {
                "type": "shift",
                "state": 2
            },
            "number": {
                "type": "shift",
                "state": 3
            },
            "true": {
                "type": "shift",
                "state": 4
            },
            "false": {
                "type": "shift",
                "state": 5
            },
            "null": {
                "type": "shift",
                "state": 6
            },
            "leftBrace": {
                "type": "shift",
                "state": 7
            },
            "leftBracket": {
                "type": "shift",
                "state": 8
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
            }
        },
        {
            "rightBrace": {
                "type": "shift",
                "state": 15
            },
            "string": {
                "type": "shift",
                "state": 14
            }
        },
        {
            "rightBracket": {
                "type": "shift",
                "state": 24
            },
            "string": {
                "type": "shift",
                "state": 17
            },
            "number": {
                "type": "shift",
                "state": 18
            },
            "true": {
                "type": "shift",
                "state": 19
            },
            "false": {
                "type": "shift",
                "state": 20
            },
            "null": {
                "type": "shift",
                "state": 21
            },
            "leftBrace": {
                "type": "shift",
                "state": 22
            },
            "leftBracket": {
                "type": "shift",
                "state": 23
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
            }
        },
        {
            "colon": {
                "type": "shift",
                "state": 29
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "shift",
                "state": 30
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "shift",
                "state": 31
            },
            "string": {
                "type": "shift",
                "state": 14
            }
        },
        {
            "rightBracket": {
                "type": "shift",
                "state": 33
            },
            "string": {
                "type": "shift",
                "state": 17
            },
            "number": {
                "type": "shift",
                "state": 18
            },
            "true": {
                "type": "shift",
                "state": 19
            },
            "false": {
                "type": "shift",
                "state": 20
            },
            "null": {
                "type": "shift",
                "state": 21
            },
            "leftBrace": {
                "type": "shift",
                "state": 22
            },
            "leftBracket": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "LIST_VALUES",
                    [
                        "JSON"
                    ]
                ]
            },
            "comma": {
                "type": "shift",
                "state": 35
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "shift",
                "state": 36
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 37
            },
            "number": {
                "type": "shift",
                "state": 38
            },
            "true": {
                "type": "shift",
                "state": 39
            },
            "false": {
                "type": "shift",
                "state": 40
            },
            "null": {
                "type": "shift",
                "state": 41
            },
            "leftBrace": {
                "type": "shift",
                "state": 42
            },
            "leftBracket": {
                "type": "shift",
                "state": 43
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "shift",
                "state": 47
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "shift",
                "state": 48
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 17
            },
            "number": {
                "type": "shift",
                "state": 18
            },
            "true": {
                "type": "shift",
                "state": 19
            },
            "false": {
                "type": "shift",
                "state": 20
            },
            "null": {
                "type": "shift",
                "state": 21
            },
            "leftBrace": {
                "type": "shift",
                "state": 22
            },
            "leftBracket": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "shift",
                "state": 50
            },
            "string": {
                "type": "shift",
                "state": 14
            }
        },
        {
            "rightBracket": {
                "type": "shift",
                "state": 52
            },
            "string": {
                "type": "shift",
                "state": 17
            },
            "number": {
                "type": "shift",
                "state": 18
            },
            "true": {
                "type": "shift",
                "state": 19
            },
            "false": {
                "type": "shift",
                "state": 20
            },
            "null": {
                "type": "shift",
                "state": 21
            },
            "leftBrace": {
                "type": "shift",
                "state": 22
            },
            "leftBracket": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "rightBrace": {
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
            "comma": {
                "type": "shift",
                "state": 54
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "LIST_VALUES",
                    [
                        "JSON",
                        "comma",
                        "LIST_VALUES"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "shift",
                "state": 55
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "shift",
                "state": 56
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 14
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "KEY_VALUES",
                    [
                        "string",
                        "colon",
                        "JSON",
                        "comma",
                        "KEY_VALUES"
                    ]
                ]
            }
        }
    ]
}