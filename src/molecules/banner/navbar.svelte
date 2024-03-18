<script>
    import AppButton from "@atoms/app-button.svelte"
    import AppLogo from "@atoms/app-logo.svelte"
</script>
<header id="navbar">
    <div class="container h-28 mx-auto px-5 flex justify-between items-center">
        <AppLogo/>
        <nav class="flex gap-2">
            <ul class="flex items-center">
                <li>Home</li>
                <li>FAQ</li>
                <li>Blog</li>
            </ul>
            <AppButton>
                Buy Template
            </AppButton>
        </nav>
    </div>
</header>