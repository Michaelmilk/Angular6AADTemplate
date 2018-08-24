import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../common/base.component";
import { DashboardService } from "./dashboard.service";
import { Logger } from "../../helper/logger";
import { Constants } from "../../core/common/constants";

@Component({
	selector: "dashboard",
	templateUrl: "./dashboard.component.html"
})
export class DashboardComponent extends BaseComponent implements OnInit {
	imageToShow: any;

	constructor(
		public logger: Logger,
        private dashboardService: DashboardService
	) {
		super(logger);
	}

	ngOnInit() {
	}
}