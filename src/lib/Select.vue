<script>
export default {
  name: 'Select',

  data() {
    return {
      selectedValue: null,
      selectedValues: null,
      options: [
        {
          label: "Drive My Car",
          value: "song1"
        },
        {
          label: "Norwegian Wood",
          value: "song2"
        },
        {
          label: "You Won't See",
          value: "song3"
        },
        {
          label: "Nowhere Man",
          value: "song4"
        },
        {
          label: "Think For Yourself",
          value: "song5"
        },
        {
          label: "The Word",
          value: "song6"
        },
        {
          label: "Michelle",
          value: "song7"
        },
        {
          label: "What goes on",
          value: "song8"
        },
        {
          label: "Girl",
          value: "song9"
        },
        {
          label: "I'm looking through you",
          value: "song10"
        },
        {
          label: "In My Life",
          value: "song11"
        },
        {
          label: "Wait",
          value: "song12"
        }
      ]
    };
  },

  methods: {
    // Пример метода для добавления новой песни
    addNewSong(label, value) {
      this.options.push({
        label: label,
        value: value
      });
    },

    // Пример метода для сброса выбора
    resetSelection() {
      this.selectedValue = null;
      this.selectedValues = null;
    }
  },

  computed: {
    // Пример computed свойства для фильтрации опций
    filteredOptions() {
      return this.options.filter(option =>
          option.label.toLowerCase().includes('car') ||
          option.value.includes('song')
      );
    },

    // Пример computed свойства для получения выбранных меток
    selectedLabels() {
      if (!this.selectedValues) return [];
      return this.selectedValues.map(value => {
        const option = this.options.find(opt => opt.value === value);
        return option ? option.label : value;
      });
    }
  },

  watch: {
    selectedValue(newValue, oldValue) {
      console.log('Single selection changed from', oldValue, 'to', newValue);
      // Можно добавить дополнительную логику при изменении выбора
    },

    selectedValues(newValues, oldValues) {
      console.log('Multiple selection changed:', {
        from: oldValues,
        to: newValues
      });
      // Можно добавить дополнительную логику при изменении множественного выбора
    }
  },

  mounted() {
    console.log('SongSelect component mounted');
    // Можно инициализировать данные при монтировании
  },

  beforeDestroy() {
    // Очистка при необходимости
    console.log('SongSelect component will be destroyed');
  }
}
</script>
<template>
  <n-space vertical>
    <n-select
        v-model:value="selectedValue"
        filterable
        placeholder="Please select a song"
        :options="options"
    />
    <n-select
        v-model:value="selectedValues"
        multiple
        filterable
        placeholder="Please Select Songs"
        :options="options"
    />
  </n-space>
</template>

