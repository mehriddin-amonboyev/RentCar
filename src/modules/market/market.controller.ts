import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MarketService } from './market.service';
import { Market, Branch } from './market.model';

@Controller('markets')
export class MarketController {
    constructor(private readonly marketService: MarketService) { }

    @Get()
    getAllMarkets(): Market[] {
        return this.marketService.getAllMarkets();
    }

    @Get(':id')
    getMarketById(@Param('id') id: number): Market {
        return this.marketService.getMarketById(id);
    }

    @Post()
    createMarket(
        @Body('name') name: string,
        @Body('location') location: string
    ): Market {
        return this.marketService.createMarket(name, location);
    }

    @Put(':id')
    updateMarket(
        @Param('id') id: number,
        @Body('name') name: string,
        @Body('location') location: string,
    ): Market {
        return this.marketService.updateMarket(id, name, location);
    }

    @Delete(':id')
    deleteMarket(
        @Param('id') id: number
    ): void {
        this.marketService.deleteMarket(id);
    }

    @Post(':id/branches')
    addBranchToMarket(
        @Param('id') marketId: number,
        @Body('name') branchName: string,
        @Body('address') branchAddress: string,
    ): Branch {
        return this.marketService.addBranchToMarket(marketId, branchName, branchAddress);
    }
}
