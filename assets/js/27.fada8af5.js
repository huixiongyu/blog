(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{392:function(n,s,e){"use strict";e.r(s);var t=e(40),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"angular即学即用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#angular即学即用"}},[n._v("#")]),n._v(" Angular即学即用")]),n._v(" "),e("p",[n._v("项目地址："),e("a",{attrs:{href:"https://github.com/shyamseshadri/angular-up-and-running",target:"_blank",rel:"noopener noreferrer"}},[n._v("link"),e("OutboundLink")],1),n._v("\n官方API文档："),e("a",{attrs:{href:"https://angular.io/api",target:"_blank",rel:"noopener noreferrer"}},[n._v("API"),e("OutboundLink")],1),n._v("\n官方快速入门："),e("a",{attrs:{href:"https://angular.io/start",target:"_blank",rel:"noopener noreferrer"}},[n._v("start"),e("OutboundLink")],1),n._v(" "),e("a",{attrs:{href:"https://angular.io/tutorial",target:"_blank",rel:"noopener noreferrer"}},[n._v("Angular Heroes"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"第2章-你好-angular"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第2章-你好-angular"}},[n._v("#")]),n._v(" 第2章：你好！Angular")]),n._v(" "),e("p",[n._v("初始化")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm install -g typescript\nnpm install -g @angular/cli\nng --vesion\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("p",[e("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/decorators.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("TypeScript装饰器"),e("OutboundLink")],1),n._v("\ndeclarations: declarations块定义了在这个模块中允许在HTML范围内使用的所有组件。你所创建的任何组件都必须在使用之前进行声明\nimports：imports数组允许导入其他的Angular应用程序和库模块，从而利用这些模块中已经创建好的组件、服务和其他功能。\nbootstrap：bootstrap数组定义充当应用程序入口点的组件。")]),n._v(" "),e("p",[e("strong",[n._v("一个Angular组件只不过是一个TypeScript类，可以用一些属性和元数据修饰的类。该类封装了组件的所有数据和功能，而装饰器则指定了如何将其转换为HTML。")])]),n._v(" "),e("ul",[e("li",[n._v("app-selector是一个CSS选择器，它用于定义在一个HTML页面中如何找到特定的组件")]),n._v(" "),e("li",[n._v("templateUrl是用于呈现该组件的HTML的路径。")]),n._v(" "),e("li",[n._v("styleUrls是模板的样式，封装了该组件的所有样式。与templateUrl不同，styleUrls是一个数组。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("ng generate component stock/stock-item\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("[]是语法可以用于元素的任何属性，它是一种从组件到UI的单向绑定。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[class]=\"positiveChange ? 'positive' : 'negative'\"\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("Angular数据绑定只能用于DOM属性，而不能用于HTML属性。HTML属性通常用于DOM元素的初始化，但在此之后，它们对底层元素就没有任何影响了。一旦元素初始化之后，它的行为就会由DOM属性来控制。\n换句话说，HTML属性用于设置HTML DOM元素的初始值，但在此之后，它的行为由DOM属性来驱动。")]),n._v(" "),e("p",[e("strong",[n._v("事件绑定")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('(click)="toggleFavorite()"\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("这种语法被称为Angular事件绑定。")]),n._v(" "),e("p",[n._v("优化：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("ng generate class model/stock\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("h2",{attrs:{id:"第3章-使用angular内置指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第3章-使用angular内置指令"}},[n._v("#")]),n._v(" 第3章：使用Angular内置指令")]),n._v(" "),e("p",[n._v("ngClass绑定多个CSS class类：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('[ngClass]="stockClasses"\n\n// ts\nngOnInit(): void {\n    this.stock = new Stock(\'Test Stock Company\', \'TSC\', 85, 80);\n    let diff = (this.stock.price / this.stock.previousPrice) - 1;\n    let largeChange = Math.abs(diff) > 0.01;\n    this.stockClasses = {\n      "positive": this.stock.isPositiveChange(),\n      "negative": !this.stock.isPositiveChange(),\n      "large-change": largeChange,\n      "small-change": !largeChange\n    }\n  }\n\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br")])]),e("p",[n._v("ngStyle实现相同的效果：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('[ngStyle]="stockStyles"\n\n// ts\nthis.stockStyles = {\n\t"color": \n.stock.isPositiveChange() ? "green": "red",\n\t"font-size": largeChange ? "1.2em": "0.8em"\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br")])]),e("p",[n._v("逐个类名或者样式的绑定：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('[class.positive]="stock.isPositiveChange()"\n[class.\n]="!stock.isPositiveChange()"\n\n[style.background-color]="stock.isPositiveChange() ? \'green\' : \'red\'"\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("p",[e("strong",[n._v("但是，如果涉及的class不止一两个的时候，最好用NgClass指令，因为它更容易管理和测试。")])]),n._v(" "),e("p",[e("strong",[n._v("内置结构化指令")])]),n._v(" "),e("p",[e("a",{attrs:{href:"https://angular.io/guide/attribute-directives",target:"_blank",rel:"noopener noreferrer"}},[n._v("Attribute directives"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("所有的结构化指令都是用星号（*）开头的。\nNgIf指令允许你在UI中有条件地隐藏或显示元素。")]),n._v(" "),e("p",[n._v("而NgFor指令用于创建多个元素，通常会为一个数组中的每个实例单独创建一个。\n从技术上讲，*ngFor指令使用的是底层的NgForOf这个类。")]),n._v(" "),e("p",[n._v("在浏览器中，元素创建或删除是两个代价高昂的操作。")]),n._v(" "),e("p",[n._v("我们只需要修改了*ngFor,在这个微语法中传递一个额外的属性，即trackBy:trackStockByCode。这将确保Angular调用这个函数而不是使用object reference来识别每个item。\n这确保了即使我们重新加载服务器的所有股票（这会改变所有的object reference），Angular仍然会通过查看股票代码来决定是否重用DOM中的元素。")]),n._v(" "),e("p",[n._v("NgSwitch本身并不是一个结构指令，而是一个属性指令。\nNgSwitchCase和NgSwitchDefault才是真正的结构指令。")]),n._v(" "),e("h2",{attrs:{id:"第4章-理解和使用angular组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第4章-理解和使用angular组件"}},[n._v("#")]),n._v(" 第4章：理解和使用Angular组件")]),n._v(" "),e("p",[n._v("在组件中只能指定template和templateUrl两者之一。你不能同时使用两者，但必须至少有一个。")]),n._v(" "),e("p",[e("strong",[n._v("样式封装：")])]),n._v(" "),e("ul",[e("li",[n._v("ViewEncapsulation.Emulated： 这是默认值，Angular会创建模拟影子DOM和影子root行为的胶水代码。")]),n._v(" "),e("li",[n._v("ViewEncapsulation.Native：这是理想情况，Angular会使用影子root。这只适用本来就支持它的浏览器和平台。")]),n._v(" "),e("li",[n._v("ViewEncapsulation.None：使用全局CSS，没有任何封装。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css'],\n  encapsulation: ViewEncapsulation.None\n})\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[n._v("变化检测：")]),n._v(" "),e("p",[n._v("当需要更新UI时，我们可能想显式地告诉Angular什么时候更新UI，而不是让Angular自己决定更新UI的时机。为了实现这一点，我们需要用changeDetection属性，将默认的Detection Strategy.Default修改为C hangeDetectionStrategy.OnPush。")]),n._v(" "),e("p",[n._v("组件和模块：")]),n._v(" "),e("p",[n._v("对于在模块上下文中使用的任何组件，必须将其倒入到模块声明文件中，并在declarations数组中进行声明。这确保了组件对模块中的其它组件是可见的。")]),n._v(" "),e("p",[n._v("declarations属性确保组件和指令可以在模块的范围内使用。")]),n._v(" "),e("p",[n._v("如果你有多个模块，或者你要创建一个供其他开发人员使用的库，那么就要用到exports属性了。")]),n._v(" "),e("p",[n._v("输入：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 子组件\n@Input() public stock: Stock;\n\n// 父组件\nexport class AppComponent implements OnInit {\n\ttitle = 'Stock Market App';\n\tpublic stockObj: Stock;\n\t\n\tngOnInit(): void {\n\t\tthis.stockObj = new Stock('Test Stock Company', 'TSC', 85, 80);\n\t}\n}\n\n<app-stock-item [stock]=\"stockObj\"></app-stock-item>\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br")])]),e("p",[n._v("输出：子组件定义的@Output() 名作为一个事件去绑定")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 子组件\n<button (click)="onToggleFavorite($event)"\n          *ngIf="!stock.favorite">Add to Favorite</button>\n          \nexport class StockItemComponent {\n\n  @Input() public stock: Stock;\n  @Output() private toggleFavorite: EventEmitter<Stock>;\n\n  constructor() {\n    this.toggleFavorite = new EventEmitter<Stock>();\n   }\n\n  onToggleFavorite(event) {\n    this.toggleFavorite.emit(this.stock);\n  }\n}\n\n// 父组件\n<app-stock-item [stock]="stock"\n                (toggleFavorite)="onToggleFavorite($event)"></app-stock-item>\n                \nonToggleFavorite(stock: Stock) {\n    console.log(\'Favorite for stock \', stock, \' was triggered\');\n    this.stock.favorite = !this.stock.favorite;\n  }\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br")])]),e("p",[n._v("生命周期：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("constructor\nngOnChanges\nngOnInit\nngDoCheck\n\tngAfterCoontentInit\n\tngAfterContentChecked\n\tngAfterViewInit\n\tngAfterViewChecked\nngOnDestroy\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br")])]),e("p",[n._v("因此，父子组件生命周期出发过程：")]),n._v(" "),e("ul",[e("li",[n._v("On Init")]),n._v(" "),e("li",[n._v("Do Check")]),n._v(" "),e("li",[n._v("After Content Init")]),n._v(" "),e("li",[n._v("After Content Checked\n"),e("ul",[e("li",[n._v("On Init")]),n._v(" "),e("li",[n._v("Do Check")]),n._v(" "),e("li",[n._v("After Content Init")]),n._v(" "),e("li",[n._v("After Content Checked")]),n._v(" "),e("li",[n._v("After View Init")]),n._v(" "),e("li",[n._v("After View Checked")])])]),n._v(" "),e("li",[n._v("After View Init")]),n._v(" "),e("li",[n._v("AFter View Checked")])]),n._v(" "),e("p",[n._v("内容投影深入介绍："),e("a",{attrs:{href:"https://medium.com/claritydesignsystem/ng-content-the-hidden-docs-96a29d70d11b",target:"_blank",rel:"noopener noreferrer"}},[n._v("《ng-content: The hidden docs》"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"第5章-测试angular组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第5章-测试angular组件"}},[n._v("#")]),n._v(" 第5章：测试Angular组件")]),n._v(" "),e("p",[n._v("如果Jasmine事测试编写框架，那么Karma就是测试运行框架。Karma的唯一任务是进行任何类型的测试，并通过一系列真实浏览器运行它并报告结果。它高度关注开发工作流，因为它主要面向的是快速执行和报告。")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://angular.io/guide/testing",target:"_blank",rel:"noopener noreferrer"}},[n._v("Angular Testing"),e("OutboundLink")],1)]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("describe('AppComponent', () => {\n\n  describe('Simple, No Angular Unit Test', () => {\n    it('should have stock instantiated on ngInit', () => {\n      const appComponent = new AppComponent();\n      expect(appComponent.stock).toBeUndefined();\n      appComponent.ngOnInit();\n      expect(appComponent.stock).toEqual(\n        new Stock('Test Stock Company', 'TSC', 85, 80));\n    });\n\n    it('should have toggle stock favorite', () => {\n      const appComponent = new AppComponent();\n      appComponent.ngOnInit();\n      expect(appComponent.stock.favorite).toBeFalsy();\n      appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));\n      expect(appComponent.stock.favorite).toBeTruthy();\n      appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));\n      expect(appComponent.stock.favorite).toBeFalsy();\n    });\n  });\n})\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br")])]),e("p",[n._v("注意，在隔离单元测试中，Angular生命周期方法不是自动调用的，这就是为什么我们在测试中手动调用ngOnInit的原因。")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://jasmine.github.io/api/2.8/matchers.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("jasmine matchers"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("非异步的beforeEach, 在上一个beforeEach之后执行。")]),n._v(" "),e("p",[n._v("在这个beforeEach中，我们调用fixture.detectChanges()。这是一个给Angular的信号，触发它的变化检测机制，它会查看组件中的值并更新相应HTML中的绑定。它也是组件第一次执行ngOnInit的触发器。如果没有这个，组件的HTML就不会有任何值。")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints",target:"_blank",rel:"noopener noreferrer"}},[n._v("Chrome DevTools使用断点调试代码"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("忘记调用fixture.detectChanges()是编写Angular测试时最常见的错误之一。默认情况下，它是手动调用的，因此当用户交互或服务器响应的事件发生时，它由开发人员触发。")]),n._v(" "),e("h2",{attrs:{id:"第6章-使用模板驱动表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第6章-使用模板驱动表单"}},[n._v("#")]),n._v(" 第6章：使用模板驱动表单")]),n._v(" "),e("p",[n._v("我们向input表单元素添加了一个name字段。这对于ngModel指令的使用是必需的。")]),n._v(" "),e("p",[n._v("我们添加的第二个绑定是ngModelChange事件绑定。在这里，我们用$event的值更新底层组件的成员变量(stock.name), $event是文本表单字段的变化值。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<input type="text"\n\tplaceholder="Stock name"\n\tname="stockName"\n\t[ngModel]="stock.name"\n\t(ngModelChange)="stock.name=$event">\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("p",[n._v("有一个更简单的版本，即我们用得最多的[(ngModel)]香蕉语法。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<input type="text"\n\tplaceholder="Stock name"\n\tname="stockName"\n\t[(ngModel)]="stock.name">\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("p",[n._v("模板引用变量：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<input type="text" #myStockField name="stockName">\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("直接通过myStockField.value访问它的值，然后将其作为参数传递给函数。")]),n._v(" "),e("h2",{attrs:{id:"第7章-使用响应式表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第7章-使用响应式表单"}},[n._v("#")]),n._v(" 第7章：使用响应式表单")]),n._v(" "),e("p",[n._v("响应式表单的核心是FormControl，它直接表示模板中的单个form元素。因此，任何响应式表单都只是一系列分组的FormControl。在FormControl级别，我们还会指定初始值和验证器（同步和异步）。")]),n._v(" "),e("p",[n._v("当我们需要跟踪任何单个表单元素（比如输入框或复选框）的状态和值时，就可以使用FormContrl。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("public stockForm: FormGroup = new FormGroup({\n  name: new FormControl(null, Validators.required),\n  code: new FormControl(null, [Validators.required, Validators.minLength(2)]),\n  price: new FormContrl(0, [Validators.required, Validators.min(0)])\n});\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("p",[n._v("官方内置的"),e("a",{attrs:{href:"https://angular.io/api/forms/Validators",target:"_blank",rel:"noopener noreferrer"}},[n._v("validator"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("FormBuilder本质上是一种语法糖，允许我们快速创建表单组和表单控件元素，而不需要手动地去new每个元素。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("public stockForm: FormGroup;\nconstructor(private fb: FormBuilder) {\n  this.createForm();\n}\ncreateForm() {\n  this.stockForm = this.fb.group({\n    name: [null, Validators.required],\n    code: [null, [Validators.required, Validators.minLength(2)]],\n    price: [0, [Validators.required, Validators.min(0)]]\n  })\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br")])]),e("p",[n._v("表单中获取值：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("export class CreateStockComponent {\n  get name() { return this.stockForm.get('name'); }\n  get price() { return this.stockForm.get('price'); }\n  get code() { return this.stockForm.get('code'); }\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("h2",{attrs:{id:"第8章-angular服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第8章-angular服务"}},[n._v("#")]),n._v(" 第8章：Angular服务")]),n._v(" "),e("p",[n._v("在一个Angular App中，实际数据的获取和公共业务逻辑应该由谁来负责？这就用到了Angular服务。Angular服务通常会是跨过APP的一层，它可以跨过各种组件重用。\n创建服务的用途：")]),n._v(" "),e("ul",[e("li",[n._v("向服务器获取数据或发送数据")]),n._v(" "),e("li",[n._v("需要封装不特定于任何组件或者可以跨组件重用的应用的应用程序逻辑")]),n._v(" "),e("li",[n._v("需要跨组件共享数据，尤其是这些组件彼此互不知道的时候。\n服务它是从组件中抽象出来的关于“怎么做”的一层，以便组件专注于”做什么“，而服务则决定了”怎么做“。")])]),n._v(" "),e("h2",{attrs:{id:"第9章-angular与http请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第9章-angular与http请求"}},[n._v("#")]),n._v(" 第9章：Angular与HTTP请求")]),n._v(" "),e("h2",{attrs:{id:"第10章-对服务器进行单元测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第10章-对服务器进行单元测试"}},[n._v("#")]),n._v(" 第10章：对服务器进行单元测试")]),n._v(" "),e("h2",{attrs:{id:"第11章-路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第11章-路由"}},[n._v("#")]),n._v(" 第11章：路由")]),n._v(" "),e("h2",{attrs:{id:"第12章-部署到生产"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第12章-部署到生产"}},[n._v("#")]),n._v(" 第12章：部署到生产")])])}),[],!1,null,null,null);s.default=a.exports}}]);