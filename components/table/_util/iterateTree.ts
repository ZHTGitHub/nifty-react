const iterateTree = (treeData: any[], keyName: string) => {
  treeData?.map(item => {
    item.key = item[keyName]
    
    if(item.children) {
      iterateTree(item.children)
    }
  })

  return treeData
}

export default iterateTree