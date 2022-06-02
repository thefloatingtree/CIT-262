<script lang="ts">
	import { TodoItem } from "$lib/models/TodoItem";

	let newItemText = "";
	let list: Array<TodoItem> = [new TodoItem("test", false)];

	function addItem() {
		if (newItemText === "") return;
		list = [...list, new TodoItem(newItemText, false)];
	}

	function removeItem(index: number) {
		list.splice(index, 1);
		list = list;
	}
</script>

<div class="p-16 space-y-6">
	<h1 class="font-bold text-4xl">Todo List</h1>
	<div class="flex space-x-3">
		<input
			bind:value={newItemText}
			type="text"
			class="outline-gray-300 outline rounded-sm outline-2 p-2"
		/>
		<button
			on:click={addItem}
			class="bg-blue-500 text-white rounded-sm px-3 py-2 hover:bg-blue-600 outline-blue-300 outline-3 focus:outline transition-all"
			>Add Todo</button
		>
	</div>
	{#each list as item, index}
		<div class="flex space-x-3 items-center">
			<input class="" type="checkbox" bind:checked={item.completed} />
			<div class="">{item.title}</div>
			<button
				on:click={() => removeItem(index)}
				class="bg-blue-500 text-white rounded-sm px-3 py-2 hover:bg-blue-600 outline-blue-300 outline-3 focus:outline transition-all"
				>Remove</button
			>
		</div>
	{/each}
</div>
