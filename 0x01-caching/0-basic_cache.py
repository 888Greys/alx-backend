#!/usr/bin/env python3
""" 0-basic_cache.py """


# from base_caching import BaseCaching

BaseCaching = __import__('base_caching').BaseCaching

class BasicCache(BaseCaching):
    """ BasicCache defines:
      - caching system
    """

    def __init__(self):
        """ Initiliaze
        """
        super().__init__()

    def put(self, key, item):
        """ Add key/value pair to cache data.

        args:
            key: key for item
            item: value to add to cache
        """

        if key is None or item is None:
            pass
        else:
            self.cache_data[key] = item

    def get(self, key):
        """ Get value of key from cache data.

        args:
            keys: key to retrieve from cache data
        """

        if key is None or key not in self.cache_data.keys():
            return None
        return self.cache_data.get(key)
