<script>
    import Navigation from "../components/navigation.svelte";
    import "../app.css";
</script>

<main class="flex h-full min-h-screen w-full flex-col bg-background-light">
    <Navigation />
    <slot />
</main>