"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssinaturaController = void 0;
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
const axios_2 = require("@nestjs/axios");
require('dotenv').config();
const ASAAS_API_KEY = process.env.ASAAS_API_KEY;
let AssinaturaController = class AssinaturaController {
    constructor(httpService) {
        this.httpService = httpService;
        this.asaasApiUrl = 'https://www.asaas.com/api/v3';
    }
    async createSubscription(datacliente) {
        const url = `${this.asaasApiUrl}/subscriptions`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.post(url, datacliente, { headers });
        return response.data;
    }
    async getSubscriptions() {
        const url = `${this.asaasApiUrl}/subscriptions`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.get(url, { headers });
        return response.data;
    }
    async getSubscription(id) {
        const url = `${this.asaasApiUrl}/subscriptions`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.get(url + `/${id}`, { headers });
        return response.data;
    }
    async getSubscriptionPays(id) {
        const url = `${this.asaasApiUrl}/subscriptions/${id}/payments`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.get(url, { headers });
        return response.data;
    }
    async deleteSubscription(id) {
        const url = `${this.asaasApiUrl}/subscriptions`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.delete(url + `/${id}`, { headers });
        return response.data;
    }
    async updateSubscription(id, datacliente) {
        const url = `${this.asaasApiUrl}/subscriptions`;
        const headers = { access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
        const response = await axios_1.default.post(url + `/${id}`, datacliente, { headers });
        return response.data;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssinaturaController.prototype, "createSubscription", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AssinaturaController.prototype, "getSubscriptions", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssinaturaController.prototype, "getSubscription", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssinaturaController.prototype, "getSubscriptionPays", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssinaturaController.prototype, "deleteSubscription", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AssinaturaController.prototype, "updateSubscription", null);
AssinaturaController = __decorate([
    (0, common_1.Controller)('subscriptions'),
    __metadata("design:paramtypes", [axios_2.HttpService])
], AssinaturaController);
exports.AssinaturaController = AssinaturaController;
//# sourceMappingURL=assinatura.controller.js.map