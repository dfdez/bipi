const sortPets = ({ pets, sort }) => {
  switch (sort){
    case "0":
      return applySort(pets)
    case "weight":
      return applySort(pets, sortNumber('weight'))
    case "reverseWeight":
      return applySort(pets, reverseSortNumber('weight'))
    case "_length":
      return applySort(pets, sortNumber('length'))
    case "reverseLength":
      return applySort(pets, reverseSortNumber('length'))
    case "height":
      return applySort(pets, sortNumber('height'))
    case "reverseHeight":
      return applySort(pets, reverseSortNumber('height'))
    case "name":
      return applySort(pets, sortString('name'))
    case "reverseName":
      return applySort(pets, reverseSortString('name'))
    case "kind":
      return applySort(pets, sortString('kind'))
    case "reverseKind":
      return applySort(pets, reverseSortString('kind'))
   }
}

const applySort = (pets, sort) => {
  return pets.sort(sort)
}

const sortNumber = (property) => (a,b) => (a[property] > b[property]) ? 1 : -1
const reverseSortNumber = (property) => (a,b) => (a[property] < b[property]) ? 1 : -1
const sortString = (property) => (a,b) => (a[property].localeCompare(b[property]))
const reverseSortString = (property) => (a,b) => (b[property].localeCompare(a[property]))

export default sortPets