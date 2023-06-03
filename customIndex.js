{
    // 将<study name>替换为您的指标名称
    // 它将由图表库内部使用
    name: "<study name>",
    metainfo: {
        "_metainfoVersion": 40,
        "id": "<study name>@tv-basicstudies-1",
        "scriptIdPart": "",
        "name": "<study name>",
        // 此说明将显示在指标窗口中
        // 当调用createStudy方法时，它也被用作“name”参数
        "description": "<study description>",
        // 该描述将显示在图表上
        "shortDescription": "<short study description>",
 
        "is_hidden_study": true,
        "is_price_study": true,
        "isCustomIndicator": true,
 
        "plots": [{"id": "plot_0", "type": "line"}],
        "defaults": {
            "styles": {
                "plot_0": {
                    "linestyle": 0,
                    "visible": true,
 
                    // 绘图线宽度
                    "linewidth": 2,
 
                    // 绘制类型:
                    //    1 - 直方图
                    //    2 - 线形图
                    //    3 - 十字指针
                    //    4 - 山形图
                    //    5 - 柱状图
                    //    6 - 圆圈图
                    //    7 - 中断线
                    //    8 - 中断区块
                    "plottype": 2,
 
                    // 显示价格线?
                    "trackPrice": false,
 
                    // 绘制透明度，百分比。
                    "transparency": 40,
 
                    // 以#RRGGBB格式绘制颜色
                    "color": "#0000FF"
                }
            },
 
            // 指标输出值的精度
            // (小数点后的位数)。
            "precision": 2,
 
            "inputs": {}
        },
        "styles": {
            "plot_0": {
                // 输出的名字将在样式窗口显示
                "title": "-- output name --",
                "histogramBase": 0,
            }
        },
        "inputs": [],
    },
 
    constructor: function() {
        this.init = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
 
            // 定义要绘制的商品。
            // 商品应该是一个字符串。
            // 您可以使用PineJS.Std.ticker（this._context）获取所选商品的代码。
            // 例,
            //    var symbol = "AAPL";
            //    var symbol = "#EQUITY";
            //    var symbol = PineJS.Std.ticker(this._context) + "#TEST";
            var symbol = "<TICKER>";
            this._context.new_sym(symbol, PineJS.Std.period(this._context), PineJS.Std.period(this._context));
        };
 
        this.main = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
 
            this._context.select_sym(1);
 
            // 您可以在PineJS.Std对象中使用以下内置函数：
            //     open, high, low, close
            //    hl2, hlc3, ohlc4
            var v = PineJS.Std.close(this._context);
            return [v];
        }
    }
}
//git add .      
//git commit -m "Add customIndex.js"
//git push -u origin main          