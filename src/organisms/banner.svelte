<script>
    import Navbar from "@molecules/banner/navbar.svelte"
    import BannerText from "@molecules/banner/banner-text.svelte"
    import BannerImages from "@molecules/banner/banner-images.svelte"
</script>

<div class="bg-[url('@commons/assets/images/background-banner.svg')] h-svh bg-no-repeat bg-cover bg-center bg-fixed">
    <Navbar/>
    <BannerText/>
    <BannerImages/>
</div>