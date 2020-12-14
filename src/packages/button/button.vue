<template>
	<button class="yuan-button" :class="{[`yuan-button-${type}`]:true}" type="button">
		<slot></slot>
	</button>
</template>

<script>
import { oneOf } from '../../utils/assist';
const types = ['default', 'primary', 'info', 'success', 'warning', 'error'];
export default {
	name: 'YButton',
	props: {
		type: {
			validator(value) {
				return oneOf(value, types);
			},
			type: String,
			default: 'default'
		}
	},
	mounted() {
		console.log(666)
		this.$notice({
			title: '提示',
			content: 'mounted',
			duration: 3
		});
	},
}
</script>

<style>
</style>