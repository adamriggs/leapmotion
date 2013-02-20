// com.adam.utils.BubbleController// Adam Riggs//package com.app.view{	import com.adam.events.MuleEvent;	import com.adam.utils.Utils;		public class BubbleController{				//vars				//objects		private var utils:Utils=Utils.instance;				protected var bubbles:Vector.<Bubble>;				//const		public const NAME:String="bubbleController";		public const RETURNTYPE:String=NAME;				/** Storage for the singleton instance. */		private static const _instance:BubbleController = new BubbleController(BubbleControllerLock);				public function BubbleController(lock:Class){			// Verify that the lock is the correct class reference.			if (lock != BubbleControllerLock)			{				throw new Error("Invalid BubbleController access.  Use BubbleController.instance instead.");			} else {				init();			}		}		//*****Initialization Routines				public function init():void{			debug("init()");						initVars();			initEvents();			initObjs();		}				private function initVars():void{					}				private function initEvents():void{			utils.em.listen(NAME, onBubbleController);		}				private function initObjs():void{					}		//*****Core Functionality						//*****Event Handlers				private function onBubbleController(e:MuleEvent):void{			/*debug("onBubbleController()");			debug("e.data.sender=="+e.data.sender);			debug("e.data.type=="+e.data.type);*/			switch(e.data.type){												default:					debug("onBubbleController()");					debug("*type not found");					debug("e.data.sender=="+e.data.sender);					debug("e.data.type=="+e.data.type);				break;							}		}				//*****Gets and Sets				public static function get instance():BubbleController{return _instance;}		//*****Utility Functions				//**debug		private function debug(str:String):void{			utils.debug(NAME,str);		}				}//end class}//end packageclass BubbleControllerLock{}