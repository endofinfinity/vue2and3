function groupBy(arr,generateKey){
	const result = {}
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i]
		// 生成分组的key
		const key = generateKey(item,i,arr)

		if(!result[key]){
			
			result[key] = 0
		}
		result[key]++
	}
	return result
}

const arr = [
	{
		id:1,
		name:'张三',
		sex:'男',
		age:19
	},
	{
		id:2,
		name:'张三',
		sex:'男',
		age:1
	},
	{
		id:3,
		name:'李四',
		sex:'男',
		age:29
	},
	{
		id:4,
		name:'王五',
		sex:'女',
		age:19
	}
]
console.log(groupBy(arr,item=>item.sex))
console.log(groupBy(arr,item=>item.age > 18 ? '成年人' : '未成年人'));
