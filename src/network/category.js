import { requestt } from "./request";
export function getCategory() {
  return requestt({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return requestt({
    url: 'subcategory',
    params: {
      maitKey
    }
  })
}
export function getCategoryDetail(miniWallkey, type) {
  return requestt({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
