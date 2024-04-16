#!/usr/bin/python3
""" A function that takes objec and filename and
    writes the object to the file using JSON
"""
import json


def save_to_json_file(my_obj, filename):
    """
    Takes a Python object and filename, and writes the object to the
    file using a JSON representation.

    Args:
        my_obj: The Python object to be written to the file.
        filename (str): The name of the file to write to.

    Returns:
        None
    """
    with open(filename, 'w') as f:
        json.dump(my_obj, f)
