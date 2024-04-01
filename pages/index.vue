<template>
    <v-row class="ma-0">
        <v-col cols="12" lg="6">
            <v-card rounded="lg">
                <v-row class="ma-0">
                    <v-col cols="12" md="auto">
                        <v-list-item color="#f7931a" title="BTC/USDT" class="px-0">
                            <template v-slot:prepend>
                                <v-icon color="#F7931A" size="50">mdi-bitcoin</v-icon>
                            </template>
                        </v-list-item>
                    </v-col>
                    <v-divider vertical="" />
                    <v-col cols="12" md="auto">
                        <v-list-item>
                            <v-list-item-title class="text-success text-h5">62,238,00</v-list-item-title>
                            <v-list-item-subtitle>Last market price</v-list-item-subtitle>
                        </v-list-item>
                    </v-col>
                    <v-divider vertical="" />
                    <v-col cols="12" md="auto" class="d-flex align-center">
                        <v-list-item>
                            <v-list-item-title class="text-success">+1.75%</v-list-item-title>
                            <v-list-item-subtitle>24h Change</v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>63,597.80</v-list-item-title>
                            <v-list-item-subtitle>24h High</v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>60,322.6</v-list-item-title>
                            <v-list-item-subtitle>24h Low</v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>2,548,722,097.16</v-list-item-title>
                            <v-list-item-subtitle>Market Volume</v-list-item-subtitle>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-card>
            <v-card class="mt-4">
                <CandelStickChart :coins="events.coins" @getCoin="getCoin" />
            </v-card>
            <v-card class="mt-4">
                <v-card-title>Open Order</v-card-title>
                <v-divider />
                <v-card-text>
                    <CommonDatatable :items="events.openOrders" :headers="events.openOrderHeader" density="compact" >
                        <template v-slot:item.side="{ item }">
                            <slot :name="item.side" :item="item.side">
                                <div class="text-success">{{  item.side }}</div>
                            </slot>
                        </template>
                        <template v-slot:item.status="{ item }">
                            <slot :name="item.status" :item="item">
                                <div class="d-flex align-center justify-space-between">
                                    <v-chip size="small" :color="item.status ? 'success' : 'error' ">{{ item.status ? 'open' : 'closed' }}</v-chip>
                                    <v-btn icon="mdi-trash-can-outline" variant="text" size="small" color="error" />
                                </div>
                            </slot>
                        </template>
                        <template v-slot:item.date="{ item }">
                            <slot :name="item.date" :item="item.date">
                                <v-col cols="12" class="pa-0">{{ item.date }}</v-col>
                            </slot>
                        </template>
                    </CommonDatatable>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" lg="3" md="6" class="pa-0">
            <v-row class="ma-0">
                <v-col cols="12">
                    <OrderBook :coins="events.asks" :headers="events.orderHeader" @orderBooks="orderBooks" title="Order Book">
                        <slot />
                    </OrderBook>
                </v-col>
                <v-col cols="12">
                    <OrderBook :coins="events.asks" />
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" lg="3" md="6" class="pa-0">
            <v-row class="ma-0">
                <v-col cols="12">
                    <Calculator />
                </v-col>
                <v-col cols="12">
                    <Balances :symbols="events.symbols" @getSymbols="getSymbols" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script setup>
    const events = reactive({
        coins: [],
        asks: [],
        bids: [],
        symbols:[],
        loading: false,
        orderHeader:[
            'Price', 'Amount', 'Total'
        ],
        openOrderHeader:[
            { title:'Date', key:'date' },
            { title:'Market', key:'market' },
            { title:'Side', key:'side' },
            { title:'Price', key:'price' },
            { title:'Amount', key:'amount' },
            { title:'Value', key:'value' },
            { title:'Filled', key:'filled' },
            { title:'Status', key:'status' },
        ],
        openOrders:[
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: true },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: false },
            { date:'2024-04-01', market:'ETH/USDT', side:'Buy', price:'3582.18', amount:'4030.40', value:'4030.40', filled:'0%', status: false },
        ]
    })
    async function getCoin(){
        events.loading = true
        // https://binance.github.io/binance-api-swagger/
        const data = await $fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=15m&limit=100',{
            method:'get'
        })
        let temp = []
        data.forEach((key, value) => {
            temp.push({
                x: new Date(key[0]).toISOString(),
                y: [parseFloat(key[1]), parseFloat(key[2]), parseFloat(key[3]), parseFloat(key[4])]
            })
        });
        events.coins = temp
        // setTimeout(() => {
        //     getCoin()
        // }, 5000);
        events.loading = false
    }
    async function orderBooks(){
        events.loading = true
        let asks = []
        const data = await $fetch('https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10',{
            method:'get'
        })
        data.asks.forEach(item => {
            asks.push({
                price: parseFloat(item[0]),
                amount: parseFloat(item[1])
            })
        });
        events.asks = asks
        let bids = []
        data.bids.forEach(item => {
            bids.push({
                price: parseFloat(item[0]),
                amount: parseFloat(item[1])
            })
        });
        events.bids = bids
        // setTimeout(() => {
        //     orderBooks()
        // }, 5000);
        events.loading = false
    }
    async function getSymbols(){
        const data = await $fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
            method:'get'
        })
        events.symbols = data
    }
</script>

<style lang="scss" scoped>

</style>