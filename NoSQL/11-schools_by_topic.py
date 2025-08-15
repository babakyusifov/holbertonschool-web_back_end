#!/usr/bin/env python3
"""Python function that returns the list of school having"""

from pymongo import MongoClient

def schools_by_topic(mongo_collection, topic):
    """Returns the list of school having a specific topic."""

    
    result = mongo_collection.find({"topics": topic})
    return list(result)
