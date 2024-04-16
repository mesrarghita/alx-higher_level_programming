#!/usr/bin/python3
"""Defines a JSON-to-object function."""
import json


def from_json_string(my_str):
    """
    This function takes a JSON string and returns a Python object.
    It does not manage execptions

    Args:
        my_str (str): The JSON string to be converted.

    Returns:
        The Python object represented by the JSON string.
    """
    return json.loads(my_str)
