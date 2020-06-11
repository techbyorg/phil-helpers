export default {
  fromElasticsearch({rows, total}) {
    return {
      totalCount: total,
      nodes: rows
    };
  },

  fromScylla(rows) {
    return {
      totalCount: rows.length,
      nodes: rows
    };
  }
};