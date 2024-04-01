<template>
    <ClientOnly>
        <apexchart :options="events.chartOptions" :series="events.series"></apexchart>
    </ClientOnly>
</template>

<script setup>
    const emit = defineEmits(['getCoin'])
    emit('getCoin')
    const props = defineProps(['coins'])
    const events = reactive({
        loading: false,
        series: [{
            data: props.coins || []
        }],
        chartOptions: {
            legend: {
                show: true,
                showForSingleSeries: false,
                showForNullSeries: true,
                showForZeroSeries: true,
                position: 'bottom',
                horizontalAlign: 'center', 
                floating: false,
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial',
                fontWeight: 400,
                formatter: undefined,
                inverseOrder: false,
                width: undefined,
                height: undefined,
                tooltipHoverFormatter: undefined,
                customLegendItems: [],
                offsetX: 0,
                offsetY: 0,
                labels: {
                    colors: undefined,
                    useSeriesColors: false
                },
                markers: {
                    width: 12,
                    height: 12,
                    strokeWidth: 0,
                    strokeColor: '#fff',
                    fillColors: undefined,
                    radius: 12,
                    customHTML: undefined,
                    onClick: undefined,
                    offsetX: 0,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 5,
                    vertical: 0
                },
                onItemClick: {
                    toggleDataSeries: true
                },
                onItemHover: {
                    highlightDataSeries: true
                },
            },
            chart: {
                type: 'candlestick',
            },
            title: {
                text: 'BTCUSDT Chart',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: false
                }
            }
        },
    })
    watch(
        () => props.coins,
        (n, o) => {
            if (n) {
                let temp = []
                events.series.forEach(item => {
                    n.forEach(el => {
                        temp.push(el)
                    });
                    item.data = temp
                });
            }
            else{
                console.log(events.series);
            }
        }
    )

</script>

<style lang="scss" scoped>

</style>