#!/usr/bin/env python3
"""Simple helper function"""


def index_range(page, page_size) -> tuple:
    """Returns a tuple of start and end index for pagination."""

    start_index = (page - 1) * page_size
    """End index is exclusive, so we multiply
    page by page_size."""
    end_index = page * page_size
    return (start_index, end_index)
