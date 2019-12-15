import uuid from 'uuid';

export default {
  methods: {
    createUniqueKey(key) {
      return `${key}${uuid.v4()}`;
    },
  },
};
