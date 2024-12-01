import './style.css'
import 'mdui/mdui.css';
import 'mdui';
import './font.css';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';
setColorScheme('#002fa7');


document.querySelector('#app').innerHTML = `
	<mdui-layout style="height: 100vh;">
		<mdui-top-app-bar style="background-color: rgb(var(--mdui-color-surface-container-low),0) !important;"
			scroll-target=".main" class="topBar">
			<mdui-button-icon icon="numbers"></mdui-button-icon>

			<mdui-top-app-bar-title style="font-family: 'Harmony Sans SC Bold';">随机数抽取器</mdui-top-app-bar-title>

			<mdui-dialog close-on-overlay-click headline="历史抽取数记录" class="history-action">
				<mdui-icon slot="icon" name="history--outlined"></mdui-icon>
				<div id="notes">
					<div
						style="margin: 1em;color: rgb(var(--mdui-color-on-primary-container),0.5);font-family: 'Product Sans'; text-align: center;">
						<span><small>开始抽取以显示记录</small></span>
					</div>
				</div>

				<mdui-button variant="text" slot="action">复制</mdui-button>
				<mdui-button slot="action" class="OK" variant="tonal">确定</mdui-button>
			</mdui-dialog>

			<mdui-button-icon icon="history--outlined" onclick="openDialog()"></mdui-button-icon>

			<mdui-dialog close-on-overlay-click headline="使用指南" class="example-action">
				<mdui-icon slot="icon" name="help_outline--outlined"></mdui-icon>
				<div>
					1.点击 <b> <mdui-icon name="play_arrow--outlined" style="font-size: small;"></mdui-icon>开始抽取
						按钮/回车键/空格键</b> 开始抽取数字。<br>
					2.在 <b> <mdui-icon name="settings--outlined" style="font-size: small;"></mdui-icon>设置 按钮</b>
					设置抽取数字范围、抽取时长、是否重复和是否手动抽取。<br>
					3.点击 <b> <mdui-icon name="fullscreen--outlined" style="font-size: small;"></mdui-icon>全屏 按钮</b>
					以全屏网页。<br>
					<mdui-divider style="margin: 1em;"></mdui-divider>
					<small>
						随机抽号基于内置的随机数发生器，在预设数字范围内，采用平均分布的抽取方式产生一个随机数。人的主观意念认为数字范围的最小端和最大端抽取到的概率更低，实际上它们和中间段数字出现的概率相同。<br><br>
						该页面作为一个通用的抽号在线工具，供需要的用户使用。抽号工具默认开启了去重处理，即在一个周期内不会抽取到重复的数字。例如抽取1-9，在第10次抽取前不会出现重复数字。关闭“周期内不重复”选项，可取消此限制。
					</small>
				</div>
				<mdui-button slot="action" variant="tonal">确定</mdui-button>
			</mdui-dialog>

			<mdui-button-icon icon="help_outline--outlined" onclick="openDialog1()"></mdui-button-icon>

			<mdui-dropdown>
				<style>
					mdui-menu {
						border-radius: var(--mdui-shape-corner-large);
						padding: 0.5em;
					}
				</style>
				<mdui-button-icon slot="trigger" icon="more_vert"></mdui-button-icon>
				<mdui-menu>
					<mdui-menu-item icon="report--outlined" rounded
						href="https://txc.qq.com/products/667423">举报</mdui-menu-item>
					<mdui-menu-item icon="edit--outlined" rounded href="https://github.com/FlyGues2889/FlyGuesWeb">
						在GitHub上编辑
					</mdui-menu-item>
				</mdui-menu>
			</mdui-dropdown>

		</mdui-top-app-bar>



		<mdui-layout-main class="main">
			<div id="out" style="
			font-family: 'Product Sans Bold';
			margin: 0;
			color:rgb(var(--mdui-color-secondary-dark));
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 20vw">
				-
			</div>
			<center>
				<div
					style="width: 100%;position: fixed;left: 0;bottom: 10%;text-align: center;display: flex;align-items: center;justify-content: center;">
					<mdui-dialog close-on-overlay-click class="settings-header">
						<mdui-top-app-bar slot="header">
							<mdui-top-app-bar-title style="text-align: left;margin-left: 0.6em;"><b
									style="font-family: 'Harmony Sans SC';">抽取器设置</b></mdui-top-app-bar-title>
							<mdui-button-icon icon="close"></mdui-button-icon>

						</mdui-top-app-bar>
						<div style="width: 100%;overflow: hidden;padding-top: 1em;">
							<mdui-text-field label="抽取数字范围 （0 - 999999） " id="num" value="1-55"
								style="font-family: 'Product Sans';"></mdui-text-field><br /><br>

							<!-- 时延：<span id="time" style="font-family: 'Product Sans';">1.00</span> 秒<br>
						<span id="timeout">
							<mdui-slider  step="250" max="5000" min="250" value="1000" class="GETTIME"
								onchange="tm=false;settime(this.value,0);storage(0)" id="settime"></mdui-slider>
						</span><br> -->

							<mdui-list-item nonclickable style="text-align: left;" icon="snooze--outlined">
								时间延迟
								<mdui-select value="750" slot="end-icon"
									style="line-height: 1.375rem;width: 24vw;font-family: 'Product Sans';max-width: 10em;"
									end-icon="keyboard_arrow_down" class="GETTIME"
									onchange="tm=false;settime(this.value,0);storage(0)" id="settime">
									<!-- <mdui-menu-item value="250">0.25s</mdui-menu-item> -->
									<mdui-menu-item value="500">0.50s</mdui-menu-item>
									<mdui-menu-item value="750">0.75s</mdui-menu-item>
									<mdui-menu-item value="1000">1s</mdui-menu-item>
									<mdui-menu-item value="1500">1.50s</mdui-menu-item>
									<mdui-menu-item value="2000">2s</mdui-menu-item>
									<mdui-menu-item value="5000">5s</mdui-menu-item>
								</mdui-select>
							</mdui-list-item>

							<mdui-list-item nonclickable style="text-align: left;padding: 0;" icon="touch_app--outlined">
								是否手动
								<span slot="description">按钮/回车/空格键以启停</span>
								<mdui-switch class="manual" id="manual" onclick="manuald();storage(0)" slot="end-icon">
									<mdui-icon slot="checked-icon" name=""></mdui-icon>
								</mdui-switch>
							</mdui-list-item>
							
							<mdui-list-item nonclickable style="text-align: left;" icon="replay">
								周期内不重复
								<label for="repeat"></label>
								<mdui-switch class="toggle" id="repeat" type="checkbox" value="1" checked=""
									onchange="if(this.checked)add=[];storage(0)"
									onclick="if(c){alert('运行中不可设置！');return false}" slot="end-icon">
									<mdui-icon slot="checked-icon" name=""></mdui-icon>
								</mdui-switch>
							</mdui-list-item>


							<mdui-divider style="width: 70vw;margin-bottom: 1vh;"></mdui-divider>

							<mdui-list-item nonclickable style="text-align: left;padding: 0;" icon="color_lens--outlined">
								数字颜色（滚动）
								<mdui-text-field id="tc" onchange="$('out').style.color=this.value;storage(0)" style="line-height: 1.375rem;width: 24vw;font-family: 'Product Sans';max-width: 10em;" value="#c2c5dd" slot="end-icon"></mdui-text-field>
							</mdui-list-item>
							<mdui-list-item nonclickable  style="text-align: left;padding: 0;" icon="color_lens">
								数字颜色（抽中）
								<mdui-text-field id="tsc" onchange="$('out').style.color=this.value;storage(0)" style="line-height: 1.375rem;width: 24vw;font-family: 'Product Sans';max-width: 10em;" value="#002fa7" slot="end-icon"></mdui-text-field>
							</mdui-list-item>

						</div>
					</mdui-dialog>

					<mdui-button-icon icon="settings--outlined" variant="text"
						style="margin-right: 1rem;" onclick="openDialog2()"></mdui-button-icon>


					<mdui-tooltip content="点击按钮 或按下 空格键/回车键 以开始抽取" open-delay="2000" placement="bottom">
						<mdui-fab id="btn" onclick="getNum()" icon="play_arrow--outlined"
							style="background-color: rgb(var(--mdui-color-primary));color: rgb(var(--mdui-color-background));">开始抽取</mdui-fab>
					</mdui-tooltip>

					<mdui-button-icon icon="fullscreen" style="margin-left: 1rem;"
						onclick="handleFullScreen()"></mdui-button-icon>
				</div>
			</center>




			<!-- </mdui-card> -->
		</mdui-layout-main>
	</mdui-layout>

	<mdui-dialog close-on-overlay-click headline="抽取范围不正确" class="example-action3">
		<mdui-icon slot="icon" name="warning_amber--outlined"></mdui-icon>
		输入有误，请注意以下规则：<br><br>
		<li>范围只能是 <b>0至999999之间的整数</b> 。</li>
		<li>输入格式为 <b>[最小整数] - [最大整数]</b> ，例如 1-100。</li><br>
		<mdui-button slot="action" variant="tonal">确定</mdui-button>
	</mdui-dialog>

	<mdui-button-icon icon="help_outline--outlined" style="display: none;" onclick="openErrorDialog()"></mdui-button-icon>

`
