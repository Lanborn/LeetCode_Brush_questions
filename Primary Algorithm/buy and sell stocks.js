/**
 * 买卖股票的最佳时间 er
 * 贪心解法
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 边界判断
    if( prices.length === 0 ) {
        return 0;
    }
    let max = 0;
    // 过了判断，就开始写正式思路
    for( var i = 0; i < prices.length; i++ ) {
        if(prices[i] < prices[i+1]) {
            max += prices[i+1] - prices[i];
        }
        // max += prices[i+1] - prices[i] > 0 ? prices[i+1] - prices[i] : 0;
    }
    return max;
};


/**
 * 买卖股票的最佳时间 er
 * 遍历求和
 */


/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let index = 0;
    let result = 0;

    while(true) {
        if ( index + 1 > prices.length ) {
            return result;
        }
        if ( prices[index] < prices[index + 1] ) {
            result += prices[index + 1] - prices[index];
            index ++;
        }else {
            index ++;
        }
    }
};