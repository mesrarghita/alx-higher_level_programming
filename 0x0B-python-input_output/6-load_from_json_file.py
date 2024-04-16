#!/usr/bin/python3
""" Creates a python object form JSON """
import json


def load_from_json_file(filename):
    """
    This function takes a filename and creates a Python object
    from tthe JSON representation in the file.

    Args:
        filename (str): The name of the file to read from.

    Returns:
        The Python object represented by the JSON string in the file.
    """
    with open(filename, 'r') as f:
        return json.load(f)
