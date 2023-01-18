<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Installation</template>
      Vous aurez besoin d'installer l'extension NO-cors sur votre navigateur pour pouvoir utiliser l'application correctement. Voici les différent liens pour différent navigateurs :<br/>
      <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf" target="_blank" rel="noopener">Chrome</a><br/>
      <a href="https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/" target="_blank" rel="noopener">Firefox</a><br/>
      <a href="https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag" target="_blank" rel="noopener">Explorer</a><br/>
      <a href="https://addons.opera.com/fr/extensions/details/cors-toggle/" target="_blank" rel="noopener">Opera</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Extensions optionnels</template>
    Vous aurez peut être envie de télécharger vos épisodes sur votre ordinateur pour les regardez lors d'un voyage ?<br/>
    Voici une extension qui vous permettra de télécharger vos épisodes directement sur votre ordinateur :<br/>
    <a href="https://chrome.google.com/webstore/detail/live-stream-downloader/looepbdllpjgdmkpdcdffhdbmpbcfekj" target="_blank" rel="noopener">Live Stream Downloader(Chrome)</a><br/>
    <a href="https://addons.mozilla.org/fr/firefox/addon/live-stream-downloader/" target="_blank" rel="noopener">Live Stream Downloader(Firefox)</a><br/>
    <a href="https://operaextensions.com/extension/hls-downloader-extension-for-opera/" target="_blank" rel="noopener">Live Stream Downloader(Opera)</a><br/>
    <a href="https://microsoftedge.microsoft.com/addons/detail/live-stream-downloader/ngjclnbcdbahekojpkhancmiobdahemb" target="_blank" rel="noopener">Live Stream Downloader(Explorer)</a><br/>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Écosystème</template>
      Ce site fonctionne essentiellement graçe à Neko-sama.fr sur les quelles sont présent l'intégralité des épisodes du site :<br/>
      <a href="https://neko-sama.fr/" target="_blank" rel="noopener">Neko-sama.fr</a><br/>
      <br/>
      JapanWatch est un projet open-source, vous pouvez retrouver le code source sur github :<br/>
      <a href="https://github.com/deril-fr" target="_blank" rel="noopener">Github</a><br/>
      Une application mobile existe également (Playstore uniquement) :<br/>
      <a href="https://play.google.com/store/apps/details?id=com.derilstream" target="_blank" rel="noopener">Playstore</a><br/>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Communauté</template>
      Des questions ? Des problèmes ?<br/>
      Vous pouvez nous contacter sur notre serveur discord :<br/>
      <a href="https://discord.gg/qHm7abf76p" target="_blank" rel="noopener">Discord</a><br/>
  </WelcomeItem>
</template>
