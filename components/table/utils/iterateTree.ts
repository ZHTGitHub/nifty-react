const iterateTree = (treeData?: any[]) => {
  treeData?.map(item => {
    item.key = item.id
    
    if(item.children) {
      iterateTree(item.children)
    }
  })

  return treeData
}

export default iterateTree