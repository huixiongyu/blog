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

在Angular模块中的providers数组是告诉Angular去创建服务的单例，并使其对任何需要它的类或组件可用。当我们在模块级别注册它时，意味着模块中的任何需要它的组件都会被注入同一个相同的实例。

依赖注入时在静态语言中出现的，这些语言常见于服务器端编程。简单地说，依赖注入是指某个类或函数会需要一个不是自己实例化的依赖对象。由其他对象（通常称为注入器）来负责提供这个对象及实例化这个对象。

[dependency-injection](https://angular.io/guide/dependency-injection)

两种实例化：

```
class MyDummyService {
	getMyData() {
		let httpService = new HttpService();
		return httpService.get('my/api');
	}
}

class MyDIService {
	constructor(private httpService: HttpService) {}
	getMyData() {
		return this.httpService.get('my/api');
	}
}
```

对于很简单的需求，将Angular的依赖注入服务看作一个非常简单的键值存储就足够了，任何组件或类在初始化时都可以向它请求一个key。

我们创建的每一个服务都需要向注入器注册一个提供者。然后，任何其他类都可以请求服务，而注入器将负责提供服务。

请注意，我们将messageService设置为public的，这样就可以在模板中访问它了。我们确认只有一个MessageService实例存在，它在两个组件之间共享。

当组件请求依赖时，Angular就会检查注入器树中距离最近的注入器，看它是否匹配。如果匹配，就用它来提供。如果没有，就检查父注入器，一直到根注入器。

**RxJS和Observables：使用异步操作**

Promise比起回掉来说，是一种更好的、惯用的处理一步行为的方法。同时，Angular为了避免它的一些缺陷，用Observable代替了它。

* Promise是对单个异步事件的操作，而Observable允许我们处理零个或多个异步事件流。
* 与Promise不同，Observ able可以被取消。也就是说，Promise无论执行成功还是出错handler都会最终被调用，而Observable不同，如果我们不再关心它时，我们就可以取消订阅，同时不再处理数据。
* Observable使我们能够很容易地组合和创建一个转换链。

[ReactiveX官方文档](http://reactivex.io/intro.html)

```
getStocks(): Observable<Stock[]> {
	return ObservableOf(this.stocks);
}

// 使用者订阅
ngOnInit() {
	this.stockService.getStocks()
		.subscribe(stocks => {
			this.stocks = stocks;
		})
}
createStock(stockForm) {
	if(stockForm.valid) {
		this.stockService.createStock(this.stock)
			.subscribe((result: any) => {
				this.message = result.msg;
				this.stock = new Stock('', '', 0, 0, 'NASDAQ');
			}, (err) => {
				this.message = err.msg;
			})
	} else {
		console.error('Stock form is in an invalid state');
	}
}
```

模板处理异步行为：

ngFor表达式中使用了管道操作。Angular提供了一个async管道，它允许我们绑定Observable。然后，Angular就会负责等待Observable发送事件，再直接将结果显示出来。它为我们省去了手动订阅Observable的那一步。

```
export class StockListComponent implements OnInit {
	public stocks$: Observable<Stock[]>;
	constructor(private stockService: StockService){}
	ngOnInit() {
		this.stocks$ = this.stockService.getStocks();
	}
	onToggleFavorite(stock: Stock) {
		this.stockService.toggleFavorite(stock);
	}
}

// 模板的使用
<app-stock-item *ngFor="let stock of stocks$ | async"
	[stock]="stock"
	(toggleFavorite)="onToggleFavorite($event)">
</app-stock-item>
```

## 第9章：Angular与HTTP请求

首先我们需要在App Module中添加对HttpClientModule的依赖。将src/app/app.module.ts的文件导入HttpClientModule，而不是HttpModule。

在需要用到请求的文件中导入HttpClient

```
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
```

跨域问题，Angular App根文件下创建一个proxy.conf.json文件

```
{
	"/api": {
		"target": "http://localhost:3000",
		"secure": false
	}
}
```

理解HttpInterceptor的一个关键是它的链式结构。在请求时会都可以决定是否要修改请求。它可以通过使用调用HttpHandler继续将请求传递给后续链。如果只有一个拦截器，那么handler将简单地将请求对象发送给后端。如果有更多的拦截器，则传递给链中的下一个拦截器。

```
providers: [
	StockService,
	AuthService,
	{
		provide: HTTP_INTERCEPTIORS,
		useClass: StockAppInterceptor,
		multi: true,
	}
]
```

HttpRequest和HttpResponse实例都是不可变的。因此，我们需要修改它们，必须创建新的不可变实例。

**Observable进阶**

从根本上说，一个Observable只是一个连接生产者和消费者的函数。冷信号会创建生产者，而热信号则是共享生产者的。

如果有人订阅了一个Angular Observable，就会为这个对象创建出生产者。这就是为什么每次订阅，我们都会有一个新的生产者。

[Hot vs Code Observables](https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339)

在App中使用AsyncPipe是要注意，如果在同一个Observable上使用多个异步管道而不是共享底层Observable时，会导致重复的服务器调用。

```
ngOnInit() {
	this.stocks$ = this.searchTerms.pipe(
		starWith(this.searchString),
		debounceTime(500),
		distinctUntilChanged(),
		switchMap((query) => this.stockService.getStocks(query)),
		share()
        );
}
```

为了形成链，我们在Observable上使用了pipe操作符，然后就可以向管道函数添加任意数量的以参数形式构成的操作符。

Observable操作符distinctUntilChanged()。这可以确保仅当新值与前一个值不同时才发出事件，从而节省更多的网络调用。

switchMap有一个好处，除了可以将一种Observable转换为另一种Observable之外，它还能够取消旧的、正在运行的订阅。

操作符参考：[rxjs operators](http://reactivex.io/rxjs/manual/overview.html#operators)

## 第10章：对服务器进行单元测试

```
describe('StockService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [StockService]
		});
	});
	
	it('should be created', inject([StockService],
		(service: StockService) => {
		expect(service).toBeTruthy();
		}))
})
```



在it块中是真正的测试，我们不算是只传递测试函数传递给它，我们调用了inject，它是Angular测试工具提供的一个函数。我们在第一个参数中传递一个数组，即需要注入到测试中的Angular服务。第二个参数是一个函数，它获取参数的顺序与我们传递给数组的顺序相同，在这个函数中编写实际的测试。

**模拟服务测试组件：**

```
beforeEach(() => {
	fixture = TestBed.createComponent(StockListComponent);
	component = fixture.componentInstance;
	// 通过注入方式获取服务
	stockService = fixture.debugElement.injector.get(StockService);
	let spy = spyOn(stockService, 'getStocks')
		.and.returnValue([
			new Stock('Mock Stock', 'MS', 800, 900, 'NYSE')
		]);
	fixture.detectChanges();
})
```

一旦我们获得服务对象，我们就可以使用Jasmine 的spy来监听服务商的不同方法。Spy（无论是来自Jasmine还是其他框架）允许我们对任何函数或方法进行代理，记录它的调用和参数，也可以指定我们自己的返回值。

**用假服务测试组件：**

如果你有一个重复的测试用例，那么创建一个可以重用的假服务也是可以的。

```
TestBed.configureTestingModule({
	declarations: [ StockListComponent, StockItemComponent ],
	providers: [{
		provide: StockService,
		useValue: stockServiceFake
	}]
})
```

我们告诉Angular，每当有人请求StockService(用provide指定)时，就提供stockServiceFake（由useValue指定）给它。这会覆盖类实例的默认提供行为。

获取服务对象（即使是假服务）的推荐方法是通过注入器。这是因为我们在测试中创建的fakeStockService对象和Angular用依赖注入提供的对象是不一样的。

**异步单元测试：**

```
fixture.whenStable().then(() => {
	fixture.detectChanges();
	expect(component.message)
		.toEqual("Tock with code MNTS successfully created");
	const messageEl = fixture.debugElement.query(
		By.css('.message')).nativeElement;
	expect(messageEl.textContent)
		.toBe('Stock with code MNTS successfully created');
});
```

**在异步测试中，使用whenStable总错不了。**

我们用fakseAsync函数取代了whenStable函数，现在用一个简单的tick()函数完成同样的工作。这样代码看起来更“线性”一些，可读性更好。

在假异步测试中，实际有两个方法可以模拟时间的流逝，分别是tick()和flush()。tick模拟经过了一段时间（可以传递一个毫秒数的参数给它）。flush则使用次数作为参数，次数表示任务队列被完成过多少次。

httpBackend.expectOne还支持用一个HttpRequest对象作为一个config对象，来代替URL参数和method参数。

## 第11章：路由

测试

## 第12章：部署到生产

