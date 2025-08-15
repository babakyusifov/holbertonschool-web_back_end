    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict[str, Any]:
        """
        Deletion-resilient hypermedia pagination.

        Returns a dictionary containing:
          - index: the start index of the current page
          - next_index: the index to use for the next page
          - page_size: the number of items returned
          - data: the actual page data
        """
        assert isinstance(index, int) and index >= 0
        indexed_data = self.indexed_dataset()
        assert index < len(indexed_data), \
            "Index out of range for indexed_dataset"

        data = []
        current_index = index
        collected = 0

        while collected < page_size and current_index < len(self.__dataset):
            item = indexed_data.get(current_index)
            if item:
                data.append(item)
                collected += 1
            current_index += 1

        return {
            "index": index,
            "next_index": current_index,
            "page_size": len(data),
            "data": data
        }

