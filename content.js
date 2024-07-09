(async () => {
	console.log('__capsit_is_running__');

	document.addEventListener('click', async function (event) {
		const targetElement = event.target.closest('a');

		if (!targetElement || !document.contains(targetElement)) return;
		if (!event.getModifierState('CapsLock')) return;

		event.preventDefault();
		event.stopPropagation();

		await navigator.clipboard.writeText(targetElement.href);
	}, { capture: true });
})();
