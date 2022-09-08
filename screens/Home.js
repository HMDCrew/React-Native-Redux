import React, { Component } from 'react'
import { SafeAreaView, Button, Text, View, FlatList } from 'react-native'
import { styles, COLORS } from '../constants/style'

import { FocusedStatusBar } from '../components'

import { connect } from 'react-redux'
import { getProducts } from '../store/features/storeSlice'
import { getCategories } from '../store/features/categoriesSlice'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getProducts()
        this.props.getCategories()
    }

    render() {
        const { navigation } = this.props;

        if (!this.props.store.products.isProdLoading) {
            return (
                <SafeAreaView style={styles.d_flex}>
                    <FocusedStatusBar background={COLORS.primary} />
                    <View style={styles.d_flex}>
                        <View style={[styles.home_wrap_content.list, styles.zIndex0]}>
                            <FlatList
                                data={this.props.store.categories.list}
                                renderItem={({ item }) => <Text>{item.name}</Text>}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>

                        <View style={[styles.home_wrap_content.home_bg, styles.zIndex_1]}>
                            <View style={styles.home_wrap_content.home_bg.header} />
                            <View style={styles.home_wrap_content.home_bg.content} />
                        </View>
                    </View>
                </SafeAreaView>
            )
        } else {
            return (<Text>Loading...</Text>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        store: {
            products: {
                list: state.products.list,
                isLoading: state.products.isLoading
            },
            categories: {
                list: state.categories.list,
                isLoading: state.categories.isLoading
            },
        }
    };
}

const mapDispatchToProps = {
    getProducts,
    getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
