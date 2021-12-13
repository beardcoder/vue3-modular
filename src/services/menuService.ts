const items: MenuItem[] = []

export interface MenuServiceInterface {
  items: MenuItem[]
  addMenuItem: (item: MenuItem) => void
  addMenuItems: (items: MenuItem[]) => void
}

const sortMenuItem = (a: MenuItem, b: MenuItem) => {
  if (a.position && b.position) {
    return a.position - b.position
  }
  return -1
}

const addMenuItems = (items: MenuItem[]) => {
  items.forEach((item) => addMenuItem(item))
}

const addMenuItem = (item: MenuItem) => {
  if (item.position === undefined) item.position = items.length + 1
  const index = items.findIndex((existingItem) => existingItem.to === item.to)
  if (index !== -1) {
    items[index] = item
  } else {
    items.push(item)
  }
  items.sort(sortMenuItem)
}

const menuService: MenuServiceInterface = {
  addMenuItems,
  addMenuItem,
  items,
}

export default menuService
