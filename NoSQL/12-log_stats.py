#!/usr/bin/env python3
"""Nginx logs stats from MongoDB"""

from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['logs']
collection = db['nginx']

total_logs = collection.count_documents({})
print(f"{total_logs} logs")

methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
"""Print the number of logs for each method."""
print("Methods:")
for method in methods:
    count = collection.count_documents({"method": method})
    print(f"\tmethod {method}: {count}")

status_checks = collection.count_documents({"method": "GET", "path": "/status"})
print(f"{status_checks} status check")
