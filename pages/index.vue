<template>
    <v-row class="ma-0">
        <v-col cols="12" lg="6">
            <v-card rounded="lg">
                <v-row class="ma-0" align="center">
                    <v-col cols="auto" lg="auto" class="d-flex align-center">
                        <v-icon color="#F7931A" size="45">mdi-bitcoin</v-icon>
                        <span class="ml-2 text-subtitle-2">BTC/USDT</span>
                    </v-col>
                    <v-divider vertical="" />
                    <v-col cols="auto" lg="auto" class="">
                        <ul>
                            <li class="text-success text-h6">62,238,00</li>
                            <li class="text-caption">Last market price</li>
                        </ul>
                    </v-col>
                    <v-divider vertical="" />
                    <v-col cols="12" lg="7" sm="8" class="d-flex align-center justify-space-between">
                        <ul>
                            <li class="text-success">+1.75%</li>
                            <li class="text-caption">24h Change</li>
                        </ul>
                        <ul>
                            <li>63,597.80</li>
                            <li class="text-caption">24h High</li>
                        </ul>
                        <ul>
                            <li>60,322.6</li>
                            <li class="text-caption">24h Low</li>
                        </ul>
                        <ul>
                            <li>2,548,722,097.16</li>
                            <li class="text-caption">Market Volume</li>
                        </ul>
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
        setTimeout(() => {
            getCoin()
        }, 5000);
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
        setTimeout(() => {
            orderBooks()
        }, 5000);
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
ul{
    list-style: none;
}
</style>