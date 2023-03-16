function kebabize(str) {
    let new_str = str.replace(/^[^a-zA-Z]+/g, '')
    new_str = new_str.slice(0, 1).toLowerCase() + new_str.slice(1, )
    return new_str.replace(/[^a-z]+/g, el => el.toLowerCase().replace(/[^a-z]+/g, '').replace(/./g, el => '-' + el))
}

  console.log(kebabize('myCamelCasedString'));
  console.log(kebabize('camelsHave3Humps'));
  console.log(kebabize('6CAMEL'));