// com.app.LeapAway
// Adam Riggs
//
package {
	
	import com.adam.events.EventManager;
	import com.adam.events.MuleEvent;
	import com.adam.utils.Utils;
	import com.app.controller.Controller;
	import com.app.model.Model;
	import com.app.view.View;
	
	import flash.display.Sprite;
	import flash.events.Event;
	
	[SWF(width="800", height="800", frameRate="60", backgroundColor="#FFFFFF")]
	public class LeapAway extends Sprite {
		
		//vars
		
		
		//objs
		private var utils:Utils=Utils.instance;
		private var model:Model;
		private var view:View;
		private var controller:Controller;
		
		//const
		public const NAME:String="leapAway";
		public const RETURNTYPE:String=NAME;
		
		public function LeapAway(){
			utils.em=EventManager.instance;
			utils.em.listen(NAME, onLeapAway);
			
			if(stage){
				init();
			} else {
				addEventListener(Event.ADDED_TO_STAGE, onAddedToStage, false, 0 ,true);
			}
		}
		
		//*****Initialization Routines
		
		public function init():void{
			debug("init()");
			
			initVars();
			initEvents();
			initObjs();
		}
		
		private function initVars():void{
			
		}
		
		private function initEvents():void{
			utils.em.listen(NAME,onLeapAway);
		}
		
		private function initObjs():void{
			
			model=Model.instance;
			controller=Controller.instance;
			view=View.instance;
			
			model.init();
			controller.init();
			view.init();
			
			controller.stage=this.stage;
			model.stage=this.stage;
			addChild(view);
			
		}
		
		//*****Core Functionality
		
		
		
		//*****Event Handlers
		
		private function onAddedToStage(e:Event):void{
			removeEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
			init();
		}
		
		private function onLeapAway(e:MuleEvent):void{
			/*debug("onLeapAway()");
			debug("e.data.sender=="+e.data.sender);
			debug("e.data.type=="+e.data.type);*/
			switch(e.data.type){
				
				case "init":
					init();
					break;
				
				default:
					debug("onLeapAway()");
					debug("*type not found");
					debug("e.data.sender=="+e.data.sender);
					debug("e.data.type=="+e.data.type);
					break;
				
			}
		}
		
		//*****Gets and Sets
		
		
		
		//*****Utility Functions
		
		public function show():void{
			this.visible = true;
		}
		
		public function hide():void{
			this.visible = false;
		}
		
		//**debug
		private function debug(str:String):void{
			utils.debug(NAME,str);
		}
		
		
	}
}
import flash.events.Event;

