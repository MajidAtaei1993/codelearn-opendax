<template>
    <v-col cols="12">
        <v-card rounded="lg">
            <v-card-title>
                <v-tabs v-model="events.tabs" selected-class="active-tab" hide-slider>
                    <v-tab class="text-capitalize">all</v-tab>
                    <v-tab class="text-capitalize">open</v-tab>
                </v-tabs>
            </v-card-title>
            <v-card-text>
                <v-window v-model="events.tabs">
                    <v-window-item>
                        <CommonDatatable :items="events.openOrders" :headers="events.openOrderHeader" density="compact" :items-per-page-options="[5,10,15,20,25]" :item-per-page="15">
                            <template v-slot:item.side="{ item }">
                                <slot :name="item.side" :item="item.side">
                                    <div :class="item.side === 'Sell' ? 'text-error' : 'text-success'">{{  item.side }}</div>
                                </slot>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <slot :name="item.actions" :item="item">
                                    <div class="d-flex align-center justify-space-between">
                                        <v-btn icon="mdi-trash-can-outline" variant="text" size="small" color="error" />
                                    </div>
                                </slot>
                            </template>
                            <template v-slot:item.status="{ item }">
                                <slot :name="item.status" :item="item">
                                    <div class="d-flex align-center justify-space-between">
                                        <v-chip size="small" :color="item.status === 1 ? 'success' : item.status === 2 ? 'error' : 'warning'">{{ item.status === 1 ? 'Open' : item.status === 2 ? 'Canceled': ' Filled' }}</v-chip>
                                    </div>
                                </slot>
                            </template>
                            <template v-slot:item.date="{ item }">
                                <slot :name="item.date" :item="item.date">
                                    <v-col cols="12" class="pa-0">{{ item.date }}</v-col>
                                </slot>
                            </template>
                        </CommonDatatable>
                    </v-window-item>
                    <v-window-item>
                        <CommonDatatable :items="events.openOrders" :headers="events.openOrderHeader" density="compact" :items-per-page-options="[5,10,15,20,25]" :item-per-page="15">
                            <template v-slot:item.side="{ item }">
                                <slot :name="item.side" :item="item.side">
                                    <div :class="item.side === 'Sell' ? 'text-error' : 'text-success'">{{  item.side }}</div>
                                </slot>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <slot :name="item.actions" :item="item">
                                    <v-btn icon="mdi-trash-can-outline" variant="text" size="small" color="error" v-if="item.status === 1" />
                                </slot>
                            </template>
                            <template v-slot:item.status="{ item }">
                                <slot :name="item.status" :item="item">
                                    <div class="d-flex align-center justify-space-between" v-if="item.status === 1">
                                        <v-chip size="small" :color="item.status === 1 ? 'success' : item.status === 2 ? 'error' : 'warning'">{{ item.status === 1 ? 'Open' : item.status === 2 ? 'Canceled': ' Filled' }}</v-chip>
                                    </div>
                                </slot>
                            </template>
                            <template v-slot:item.date="{ item }">
                                <slot :name="item.date" :item="item.date">
                                    <v-col cols="12" class="pa-0">{{ item.date }}</v-col>
                                </slot>
                            </template>
                        </CommonDatatable>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script setup>
    const events = reactive({
        tabs: null,
        openOrderHeader:[
            { title:'Date', key:'date' },
            { title:'Market', key:'market' },
            { title:'Side', key:'side' },
            { title:'Price', key:'price' },
            { title:'Amount', key:'amount' },
            { title:'Value', key:'value' },
            { title:'Filled', key:'filled' },
            { title:'Status', key:'status' },
            { title:'Actions', key:'actions' },
        ],
        openOrders:[
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'100%', status: 3 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Sell', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 1 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: 2 },
        ]
    })
</script>

<style lang="scss" scoped>
.active-tab{
    background-color: #EDEDFC !important;
    color: #1409A0 !important;
    border-radius: 7px !important;
}
</style>