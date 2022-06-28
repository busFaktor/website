<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import PiggibankIcon from "./icons/IconPiggybank.vue";
import ArrowheartIcon from "./icons/IconArrow-through-heart.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Satzung</template>

    busFaktor() e.V.
    <RouterLink to="/satzung">Satzung</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Mitglieder</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ArrowheartIcon />
    </template>
    <template #heading>Projekte</template>

    <p>
      Unser Verein fördert und unterstützt Vorhaben der Bildung, der
      Volksbildung und die Förderung des bürgerschaftlichen Engagements
      zugunsten gemeinnütziger Zwecke, wie es sinngemäß in § 2 unserer
      <RouterLink to="/satzung">Satzung</RouterLink> heißt.
    </p>
    <p>
      Dazu gehört nach § 3 auch die Entwicklung und Verbreitung von freier und
      Open Source Software zur Nutzung durch gemeinnützige Organisationen.
    </p>
    <p>
      Das gemeinnützige Projekt eines sozialen Netzwerks im Internet, aus dem
      der Verein hervorgegangen ist, wird von uns als gesellschaftliches Projekt
      <RouterLink to="/ocelot">Ocelot-Social Community</RouterLink>
      fortgeführt.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    <ul>
      <li><a target="_blank" href="https://github.com/busFaktor">GitHub</a></li>
      <li>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCJcS3MhONRJsw_V__1PuBpQ"
          >Youtube</a
        >
      </li>
      <li><a target="_blank" href="https://discord.gg/mUUZxgGj">Discord</a></li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <PiggibankIcon />
    </template>
    <template #heading>Spenden</template>

    busFaktor() e.V.
    <RouterLink to="/spenden">Spenden</RouterLink>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Impressum</template>

    busFaktor() e.V.
    <RouterLink to="/impressum">Impressum</RouterLink>. Informationen zum
    <RouterLink to="/datenschutz">Datenschutz</RouterLink> findest du hier.
  </WelcomeItem>
</template>
