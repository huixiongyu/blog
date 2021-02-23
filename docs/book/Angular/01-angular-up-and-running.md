# Angular即学即用

项目地址：[link](https://github.com/shyamseshadri/angular-up-and-running)
官方API文档：[API](https://angular.io/api)
官方快速入门：[start](https://angular.io/start)
[Angular Heroes](https://angular.io/tutorial)

## 第2章：你好！Angular

初始化

```
npm install -g typescript
npm install -g @angular/cli
ng --vesion
```

[TypeScript装饰器](https://www.typescriptlang.org/docs/handbook/decorators.html)
declarations: declarations块定义了在这个模块中允许在HTML范围内使用的所有组件。你所创建的任何组件都必须在使用之前进行声明
imports：imports数组允许导入其他的Angular应用程序和库模块，从而利用这些模块中已经创建好的组件、服务和其他功能。
bootstrap：bootstrap数组定义充当应用程序入口点的组件。

**一个Angular组件只不过是一个TypeScript类，可以用一些属性和元数据修饰的类。该类封装了组件的所有数据和功能，而装饰器则指定了如何将其转换为HTML。**

* app-selector是一个CSS选择器，它用于定义在一个HTML页面中如何找到特定的组件
* templateUrl是用于呈现该组件的HTML的路径。
* styleUrls是模板的样式，封装了该组件的所有样式。与templateUrl不同，styleUrls是一个数组。

```
ng generate component stock/stock-item
```

[]是语法可以用于元素的任何属性，它是一种从组件到UI的单向绑定。

```
[class]="positiveChange ? 'positive' : 'negative'"
```

Angular数据绑定只能用于DOM属性，而不能用于HTML属性。HTML属性通常用于DOM元素的初始化，但在此之后，它们对底层元素就没有任何影响了。一旦元素初始化之后，它的行为就会由DOM属性来控制。
换句话说，HTML属性用于设置HTML DOM元素的初始值，但在此之后，它的行为由DOM属性来驱动。

**事件绑定**

```
(click)="toggleFavorite()"
```

这种语法被称为Angular事件绑定。

优化：

```
ng generate class model/stock
```



## 第3章：使用Angular内置指令

ngClass绑定多个CSS class类：

```
[ngClass]="stockClasses"

// ts
ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    }
  }


```

ngStyle实现相同的效果：

```
[ngStyle]="stockStyles"

// ts
this.stockStyles = {
	"color": 
.stock.isPositiveChange() ? "green": "red",
	"font-size": largeChange ? "1.2em": "0.8em"
}
```

逐个类名或者样式的绑定：

```
[class.positive]="stock.isPositiveChange()"
[class.
]="!stock.isPositiveChange()"

[style.background-color]="stock.isPositiveChange() ? 'green' : 'red'"
```

**但是，如果涉及的class不止一两个的时候，最好用NgClass指令，因为它更容易管理和测试。**



**内置结构化指令**

[Attribute directives](https://angular.io/guide/attribute-directives)

所有的结构化指令都是用星号（*）开头的。
NgIf指令允许你在UI中有条件地隐藏或显示元素。

而NgFor指令用于创建多个元素，通常会为一个数组中的每个实例单独创建一个。
从技术上讲，*ngFor指令使用的是底层的NgForOf这个类。

在浏览器中，元素创建或删除是两个代价高昂的操作。

我们只需要修改了*ngFor,在这个微语法中传递一个额外的属性，即trackBy:trackStockByCode。这将确保Angular调用这个函数而不是使用object reference来识别每个item。
这确保了即使我们重新加载服务器的所有股票（这会改变所有的object reference），Angular仍然会通过查看股票代码来决定是否重用DOM中的元素。


NgSwitch本身并不是一个结构指令，而是一个属性指令。
NgSwitchCase和NgSwitchDefault才是真正的结构指令。

## 第4章：理解和使用Angular组件

在组件中只能指定template和templateUrl两者之一。你不能同时使用两者，但必须至少有一个。



**样式封装：**

* ViewEncapsulation.Emulated： 这是默认值，Angular会创建模拟影子DOM和影子root行为的胶水代码。
* ViewEncapsulation.Native：这是理想情况，Angular会使用影子root。这只适用本来就支持它的浏览器和平台。
* ViewEncapsulation.None：使用全局CSS，没有任何封装。

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
```

变化检测：

当需要更新UI时，我们可能想显式地告诉Angular什么时候更新UI，而不是让Angular自己决定更新UI的时机。为了实现这一点，我们需要用changeDetection属性，将默认的Detection Strategy.Default修改为C hangeDetectionStrategy.OnPush。



组件和模块：

对于在模块上下文中使用的任何组件，必须将其倒入到模块声明文件中，并在declarations数组中进行声明。这确保了组件对模块中的其它组件是可见的。

declarations属性确保组件和指令可以在模块的范围内使用。

如果你有多个模块，或者你要创建一个供其他开发人员使用的库，那么就要用到exports属性了。

输入：

```
// 子组件
@Input() public stock: Stock;

// 父组件
export class AppComponent implements OnInit {
	title = 'Stock Market App';
	public stockObj: Stock;
	
	ngOnInit(): void {
		this.stockObj = new Stock('Test Stock Company', 'TSC', 85, 80);
	}
}

<app-stock-item [stock]="stockObj"></app-stock-item>
```

输出：子组件定义的@Output() 名作为一个事件去绑定

```
// 子组件
<button (click)="onToggleFavorite($event)"
          *ngIf="!stock.favorite">Add to Favorite</button>
          
export class StockItemComponent {

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
   }

  onToggleFavorite(event) {
    this.toggleFavorite.emit(this.stock);
  }
}

// 父组件
<app-stock-item [stock]="stock"
                (toggleFavorite)="onToggleFavorite($event)"></app-stock-item>
                
onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }
```

生命周期：

```
constructor
ngOnChanges
ngOnInit
ngDoCheck
	ngAfterCoontentInit
	ngAfterContentChecked
	ngAfterViewInit
	ngAfterViewChecked
ngOnDestroy
```

因此，父子组件生命周期出发过程：

* On Init
* Do Check
* After Content Init
* After Content Checked
  * On Init
  * Do Check
  * After Content Init
  * After Content Checked
  * After View Init
  * After View Checked
* After View Init
* AFter View Checked

内容投影深入介绍：[《ng-content: The hidden docs》](https://medium.com/claritydesignsystem/ng-content-the-hidden-docs-96a29d70d11b)



## 第5章：测试Angular组件

如果Jasmine事测试编写框架，那么Karma就是测试运行框架。Karma的唯一任务是进行任何类型的测试，并通过一系列真实浏览器运行它并报告结果。它高度关注开发工作流，因为它主要面向的是快速执行和报告。

[Angular Testing](https://angular.io/guide/testing)

```
describe('AppComponent', () => {

  describe('Simple, No Angular Unit Test', () => {
    it('should have stock instantiated on ngInit', () => {
      const appComponent = new AppComponent();
      expect(appComponent.stock).toBeUndefined();
      appComponent.ngOnInit();
      expect(appComponent.stock).toEqual(
        new Stock('Test Stock Company', 'TSC', 85, 80));
    });

    it('should have toggle stock favorite', () => {
      const appComponent = new AppComponent();
      appComponent.ngOnInit();
      expect(appComponent.stock.favorite).toBeFalsy();
      appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
      expect(appComponent.stock.favorite).toBeTruthy();
      appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
      expect(appComponent.stock.favorite).toBeFalsy();
    });
  });
})
```

注意，在隔离单元测试中，Angular生命周期方法不是自动调用的，这就是为什么我们在测试中手动调用ngOnInit的原因。

[jasmine matchers](https://jasmine.github.io/api/2.8/matchers.html)

非异步的beforeEach, 在上一个beforeEach之后执行。

在这个beforeEach中，我们调用fixture.detectChanges()。这是一个给Angular的信号，触发它的变化检测机制，它会查看组件中的值并更新相应HTML中的绑定。它也是组件第一次执行ngOnInit的触发器。如果没有这个，组件的HTML就不会有任何值。

[Chrome DevTools使用断点调试代码](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints)

忘记调用fixture.detectChanges()是编写Angular测试时最常见的错误之一。默认情况下，它是手动调用的，因此当用户交互或服务器响应的事件发生时，它由开发人员触发。

## 第6章：使用模板驱动表单

我们向input表单元素添加了一个name字段。这对于ngModel指令的使用是必需的。

我们添加的第二个绑定是ngModelChange事件绑定。在这里，我们用$event的值更新底层组件的成员变量(stock.name), $event是文本表单字段的变化值。

```
<input type="text"
	placeholder="Stock name"
	name="stockName"
	[ngModel]="stock.name"
	(ngModelChange)="stock.name=$event">
```

有一个更简单的版本，即我们用得最多的[(ngModel)]香蕉语法。

```
<input type="text"
	placeholder="Stock name"
	name="stockName"
	[(ngModel)]="stock.name">
```

模板引用变量：

```
<input type="text" #myStockField name="stockName">
```

直接通过myStockField.value访问它的值，然后将其作为参数传递给函数。

## 第7章：使用响应式表单
响应式表单的核心是FormControl，它直接表示模板中的单个form元素。因此，任何响应式表单都只是一系列分组的FormControl。在FormControl级别，我们还会指定初始值和验证器（同步和异步）。

当我们需要跟踪任何单个表单元素（比如输入框或复选框）的状态和值时，就可以使用FormContrl。
```
public stockForm: FormGroup = new FormGroup({
  name: new FormControl(null, Validators.required),
  code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  price: new FormContrl(0, [Validators.required, Validators.min(0)])
});
```

官方内置的[validator](https://angular.io/api/forms/Validators)

FormBuilder本质上是一种语法糖，允许我们快速创建表单组和表单控件元素，而不需要手动地去new每个元素。

```
public stockForm: FormGroup;
constructor(private fb: FormBuilder) {
  this.createForm();
}
createForm() {
  this.stockForm = this.fb.group({
    name: [null, Validators.required],
    code: [null, [Validators.required, Validators.minLength(2)]],
    price: [0, [Validators.required, Validators.min(0)]]
  })
}
```
表单中获取值：
```
export class CreateStockComponent {
  get name() { return this.stockForm.get('name'); }
  get price() { return this.stockForm.get('price'); }
  get code() { return this.stockForm.get('code'); }
}
```

## 第8章：Angular服务
在一个Angular App中，实际数据的获取和公共业务逻辑应该由谁来负责？这就用到了Angular服务。Angular服务通常会是跨过APP的一层，它可以跨过各种组件重用。
创建服务的用途：
* 向服务器获取数据或发送数据
* 需要封装不特定于任何组件或者可以跨组件重用的应用的应用程序逻辑
* 需要跨组件共享数据，尤其是这些组件彼此互不知道的时候。
服务它是从组件中抽象出来的关于“怎么做”的一层，以便组件专注于”做什么“，而服务则决定了”怎么做“。

## 第9章：Angular与HTTP请求



## 第10章：对服务器进行单元测试



## 第11章：路由



## 第12章：部署到生产

