function search(searchTerm) {
    const search = new RegExp(searchTerm, 'i');
    console.log(search);
    return TITLES.filter(title => {
        const res = search.test(title)
        return res;
    })
  }

const TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']  
console.log(search('ock'));
