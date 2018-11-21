/* jshint esversion: 6 */
const filters = {
  formatDate: (val) => {
    const date = new Date(val);
    const y = 1900 + date.getYear();
    const m = `0${date.getMonth() + 1}`;
    const d = `0${date.getDate()}`;
    return `${y}-${m.substring(m.length - 2, m.length)}-${d.substring(d.length - 2, d.length)}`;
  }
}

export default filters
