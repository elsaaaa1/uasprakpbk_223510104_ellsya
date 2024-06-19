<template>
  <div v-if="weather">
    <div>
      <div class="text-h4">{{ weather.name }}, {{ weather.sys.country }}</div>
      <div class="text-subtitle2">
        {{ formatUnixTimestamp(weather.dt) }}
      </div>
    </div>
    <div class="row items-center justify-center justify-between">
      <div class="col-4">
        <q-img
          :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`"
          width="150px"
        />
      </div>
      <div class="col-4">
        <div class="text-h3 text-left">
          {{ weather.main.temp.toFixed(0) }}°C
        </div>
      </div>
    </div>
    <div class="text-caption text-bold q-pl-lg">
      Feels like {{ weather.main.feels_like.toFixed(0) }}°C.
      {{ capitalizeFirst(weather.weather[0].description) }}.
      {{ capitalizeFirst(weather.weather[0].main) }}
    </div>
    <div class="row justify-around">
      <div class="col-4 q-pl-lg margin-bt">
        <div class="coloumn">
          <div class="col-4 text-h4">
            {{ weather.main.temp_max.toFixed(0) }}°
          </div>
          <div class="col-4 text-caption">High</div>
        </div>
      </div>
      <div class="col-4 q-pl-lg margin-bt">
        <div class="coloumn">
          <div class="col-4">
            <span class="text-h4">
              {{ weather.wind.speed.toFixed(1) }}
            </span>
            <span>{{ " " }}m/s</span>
          </div>
          <div class="col-4 text-caption">Wind</div>
        </div>
      </div>
      <div class="col-4 q-pl-lg margin-bt">
        <div class="coloumn">
          <div class="col-4 text-h4">
            {{
              moment(weather.sys.sunrise * 1000)
                .tz("Asia/Jakarta")
                .format("HH:mm")
            }}
          </div>
          <div class="col-4 text-caption">Sunrise</div>
        </div>
      </div>
      <div class="col-4 q-pl-lg margin-bt">
        <div class="coloumn">
          <div class="col-4 text-h4">
            {{ weather.main.temp_min.toFixed(0) }}°
          </div>
          <div class="col-4 text-caption">Low</div>
        </div>
      </div>
      <div class="col-4 q-pl-lg margin-bt">
        <div class="coloumn">
          <div class="col-4">
            <span class="text-h4">
              {{ (weather.visibility / 1000).toFixed(1) }}
            </span>
            <span>{{ " " }}km</span>
          </div>
          <div class="col-4 text-caption">Visibility</div>
        </div>
      </div>
      <div class="col-4 q-pl-lg margin-bt">
        <div class="coloumn">
          <div class="col-4 text-h4">
            {{
              moment(weather.sys.sunset * 1000)
                .tz("Asia/Jakarta")
                .format("HH:mm")
            }}
          </div>
          <div class="col-4 text-caption">Sunset</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment-timezone";

defineOptions({
  name: "WeatherResult",
});

const props = defineProps({
  weather: {
    type: Object,
  },
});

function formatUnixTimestamp(unixTimestamp) {
  const time = moment(unixTimestamp * 1000).tz("Asia/Jakarta");
  return time.format("DD MMMM YYYY, HH:mm") + " WIB";
}
function capitalizeFirst(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}
</script>

<style>
.margin-bt {
  margin-bottom: 12px;
}
</style>
