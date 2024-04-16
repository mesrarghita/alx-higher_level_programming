#!/usr/bin/python3
import sys
import os

# Import the required funcitons from their respective files
from save_to_json_file import save_to_json_file
from load_from_json_file import load_from_json_file


def add_item():
    """
    This script takes command-line arguments, adds them to a list,
    and saves the list to file named add_item.json
    """
    filename = "add_item.json"
    try:
        my_list = load_from_json_file(filename)
    except FileNotFoundError:
        my_list = []

    for arg in sys.argv[1:]:
        my_list.append(arg)

    save_to_json_file(my_list, filename)


if __name__ == "__main__":
    add_item()
