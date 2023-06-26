"""
This file is part of pv2_ui_base.
"""
import os


def get_css_min_path():
    """
    Returns the path of minimized css file
    """
    return os.path.join(os.path.dirname(__file__), "pv2.min.css")


def get_css_content():
    """
    Returns the content of minimized css file
    """
    with open(get_css_min_path(), "r", encoding="utf-8") as file:
        return file.read()
